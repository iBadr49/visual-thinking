import { gql } from 'graphql-request'
import { hygraph } from '$lib/server/hygraph'
import { responseInit } from '$lib/server/responseInit'

export async function GET({ params }) {
  const slug = params.slug

  const query = gql`
    query getMethod($slug: String!) {
      method(where: { slug: $slug }) {
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
    }
  `
  const data = await hygraph.request(query, { slug })
  return new Response(JSON.stringify(data), responseInit)
}
