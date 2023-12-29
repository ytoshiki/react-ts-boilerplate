import { useRoutes } from 'react-router-dom'
import { publicRoutes } from './public'
import { commonRoutes } from './common'

export const AppRoutes = () => {
  const auth = { user: null }

  const routes = auth?.user ? [] : publicRoutes
  const element = useRoutes([...routes, ...commonRoutes])
  return <>{element}</>
}
