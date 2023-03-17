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
  const formdata = await request.json()
  let errors = new Array()

  // Run some checks!
  if (typeof formdata.author !== 'string') {
    console.log('Got error!')
    errors.push('author should have a string value')
  }

  // If we have errors, send them to the user
  if (errors.length > 0) {
    return new Response(
      JSON.stringify({
        method: 'POST',
        working: 'yes',
        succes: false,
        errors: errors,
      })
    )
    // No errors, add the comment
  } else {
    const mutation = gql`
      mutation createComment($author: String!, $text: String!, $methodId: ID!) {
        createComment(data: { author: $author, text: $text, method: { connect: { id: $methodId } } }) {
          id
        }
      }
    `

    const data = await hygraph.request(mutation, { ...formdata }).catch((error) => {
      errors.push(error)
    })

    const publication = gql`
      mutation publishComment($id: ID!) {
        publishComment(where: { id: $id }, to: PUBLISHED) {
          id
        }
      }
    `

    const pubData = await hygraph.request(publication, { id: data.createComment.id }).catch((error) => {
      errors.push(error)
    })

    return new Response(
      JSON.stringify({
        method: 'POST',
        working: 'yes',
        success: pubData.publishComment !== undefined,
        data: data,
        pubData: pubData,
      }),
      responseInit
    )
  }
}
