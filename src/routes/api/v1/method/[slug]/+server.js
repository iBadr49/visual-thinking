import { gql } from 'graphql-request'
import { hygraph } from '$lib/server/hygraph'
import { responseInit } from '$lib/server/responseInit'

export async function GET({ params }) {
  const slug = params.slug

  const query = gql`
    query getMethod($slug: String!) {
      method(where: { slug: $slug }) {
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
  const data = await hygraph.request(query, { slug })
  return new Response(JSON.stringify(data), responseInit)
}
