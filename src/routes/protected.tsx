import { Suspense } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { lazyImport } from '@/utils/lazyImport'

const { Profile } = lazyImport(() => import('@/features/users'), 'Profile')

const App = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
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
