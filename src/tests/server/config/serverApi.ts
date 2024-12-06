import { setupServer } from 'msw/node'

import { handlers } from '../handlers'

export const serverApi = setupServer(...handlers)

serverApi.events.on('request:start', ({ request }) => {
	console.log('Outgoing:', request.method, request.url)
})
