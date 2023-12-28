import { setupServer } from 'msw/node'
import { handlers } from './heandler'

export const server = setupServer(...handlers)
