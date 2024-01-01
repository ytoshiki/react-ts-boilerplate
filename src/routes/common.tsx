import { Landing } from '@/features/misc'
import { MainLayout } from '@/components/Layout'
import { lazyImport } from '@/utils/lazyImport'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const { Format } = lazyImport(() => import('@/features/misc'), 'Format')
const { NotFound } = lazyImport(() => import('@/features/misc'), 'NotFound')

const App = () => {
  return (
    <MainLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

export const commonRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: 'format',
        element: <Format />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]
