import { sequence } from '@sveltejs/kit/hooks'

// Preflight options call returns 200-ok for our API to function as a backend
const preflight = async ({ event, resolve }) => {
  if (event.request.method !== 'OPTIONS') {
    return await resolve(event)
  }
  return new Response(new Blob(), { status: 200 })
}

export const handle = sequence(preflight)
