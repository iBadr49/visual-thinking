import { gql } from 'graphql-request'
import { hygraph } from '$lib/server/hygraph'
import { responseInit } from '$lib/server/responseInit'

export async function GET({ url }) {
  let first = Number(url.searchParams.get('first') ?? 5)
  let skip = Number(url.searchParams.get('skip') ?? 0)
  let direction = url.searchParams.get('direction') === 'ASC' ? 'ASC' : 'DESC'
  let orderBy = (url.searchParams.get('orderBy') ?? 'publishedAt') + '_' + direction

  const query = gql`
    query getMethods($first: Int, $skip: Int, $orderBy: MethodOrderByInput) {
      methods(first: $first, skip: $skip, orderBy: $orderBy) {
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
      methodsConnection {
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
      }
    }
  `

  const data = await hygraph.request(query, { first, skip, orderBy })
  return new Response(JSON.stringify(data), responseInit)
}
