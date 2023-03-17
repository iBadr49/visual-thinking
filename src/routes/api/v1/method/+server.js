import { gql } from 'graphql-request'
import { hygraph } from '$lib/server/hygraph'
import { responseInit } from '$lib/server/responseInit'

export async function GET({ url }) {
  let id = Number(url.searchParams.get('id') ?? 1)

  const query = gql`
    query getMethod($id: ID!) {
      method(where: { id: $id }) {
        id
        slug
        title
        description {
          html
        }
        categories {
          title
        }
        material
        duration
        template {
          url
        }
        steps {
          title
          description {
            html
          }
          visual {
            url
          }
        }
        examples {
          url
        }
        sources {
          title
          url
        }
      }
    }
  `
  const data = await hygraph.request(query, { id })
  return new Response(JSON.stringify(data), responseInit)
}
