import { useRoutes } from 'react-router-dom'
import { publicRoutes } from './public'
import { commonRoutes } from './common'
import { protectedRoutes } from './protected'
import useAuth from '@/hooks/useAuth'

export const AppRoutes = () => {
  const { session } = useAuth()

  const routes = session?.user ? protectedRoutes : publicRoutes

  const combinedRoutes = useRoutes([...routes, ...commonRoutes])

  return <>{combinedRoutes}</>
}
