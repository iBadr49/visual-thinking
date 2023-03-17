import { gql } from 'graphql-request'
import { hygraph } from '$lib/server/hygraph'
import { responseInit } from '$lib/server/responseInit'

export async function GET({ url }) {
  let id = url.searchParams.get('id') ?? ''

  const query = gql`
    query getComments($id: ID!) {
      comments(where: { method: { id: $id } }) {
        id
        author
        text
        method {
          id
        }
      }
    }
  `

  const data = await hygraph.request(query, { id })
  return new Response(JSON.stringify(data), responseInit)
}

export async function POST({ request }) {
  const requestData = await request.json()
  let errors = []

  // Controleer de request data op juistheid
  if (!requestData.author || typeof requestData.author !== 'string') {
    errors.push({ field: 'author', message: 'author should exist and have a string value' })
  }
  if (!requestData.text || typeof requestData.text !== 'string') {
    errors.push({ field: 'text', message: 'text should exist and have a string value' })
  }
  if (!requestData.methodId) {
    errors.push({ field: 'methodId', message: 'methodId should exist' })
  }

  // Als we hier al errors hebben in de form data sturen we die terug
  if (errors.length > 0) {
    return new Response(
      JSON.stringify({
        method: 'POST',
        working: 'yes',
        succes: false,
        errors: errors,
      })
    )

    // Geen errors, voeg het comment toe
  } else {
    // Bereid de mutatie voor
    const mutation = gql`
      mutation createComment($author: String!, $text: String!, $methodId: ID!) {
        createComment(data: { author: $author, text: $text, method: { connect: { id: $methodId } } }) {
          id
        }
      }
    `

    // Bereid publiceren voor
    const publication = gql`
      mutation publishComment($id: ID!) {
        publishComment(where: { id: $id }, to: PUBLISHED) {
          id
        }
      }
    `

    // Voer de mutatie uit
    const data = await hygraph
      .request(mutation, { ...requestData })
      // Stuur de response met created id door
      .then((data) => {
        return (
          hygraph
            // Voer de publicatie uit met created id
            .request(publication, { id: data.createComment.id ?? null })
            // Vang fouten af bij het publiceren
            .catch((error) => {
              errors.push({ field: 'HyGraph', message: error })
            })
        )
      })
      // Vang fouten af bij de mutatie
      .catch((error) => {
        errors.push({ field: 'HyGraph', message: error })
      })

    return new Response(
      JSON.stringify({
        method: 'POST',
        working: 'yes',
        success: data && data.publishComment ? true : false,
        data: data && data.publishComment,
        errors: errors,
      }),
      responseInit
    )
  }
}
