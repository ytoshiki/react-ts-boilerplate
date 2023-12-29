import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('http://localhost:3030/test', () => {
    return HttpResponse.json([
      {
        name: 'test'
      }
    ])
  })
]
