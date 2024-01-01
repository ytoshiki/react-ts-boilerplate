import { Suspense } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { lazyImport } from '@/utils/lazyImport'
import { MainLayout } from '@/components/Layout'

const { Profile } = lazyImport(() => import('@/features/users'), 'Profile')

const App = () => {
  return (
    <MainLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      {
        path: 'profile',
        element: <Profile />
      },
      { path: '*', element: <Navigate to="." /> }
    ]
  }
]
