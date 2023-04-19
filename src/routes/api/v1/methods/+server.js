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
          height
          width
          original: url
          small: url(transformation: { image: { resize: { width: 500, fit: clip } } })
          originalAsWebP: url(transformation: { document: { output: { format: webp } } })
          smallAsWebP: url(
            transformation: { image: { resize: { width: 500, fit: clip } }, document: { output: { format: webp } } }
          )
        }
        steps {
          title
          description {
            html
          }
          visual {
            url
            height
            width
            original: url
            small: url(transformation: { image: { resize: { width: 500, fit: clip } } })
            originalAsWebP: url(transformation: { document: { output: { format: webp } } })
            smallAsWebP: url(
              transformation: { image: { resize: { width: 500, fit: clip } }, document: { output: { format: webp } } }
            )
          }
        }
        examples {
          url
          height
          width
          original: url
          small: url(transformation: { image: { resize: { width: 500, fit: clip } } })
          originalAsWebP: url(transformation: { document: { output: { format: webp } } })
          smallAsWebP: url(
            transformation: { image: { resize: { width: 500, fit: clip } }, document: { output: { format: webp } } }
          )
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
