import { NotFound } from '@/features/misc'
import { Landing } from '@/features/misc/'

export const commonRoutes = [
  { path: '/', element: <Landing /> },
  { path: '*', element: <NotFound /> }
]
