import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { lazyImport } from '@/utils/lazyImport'

const { Login } = lazyImport(() => import('@/features/auth'), 'Login')
const { Register } = lazyImport(() => import('@/features/auth'), 'Register')

const App = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  )
}

export const publicRoutes = [
  {
    path: '/auth/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
]
