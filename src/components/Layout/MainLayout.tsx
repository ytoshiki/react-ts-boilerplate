import { Navigation } from '../Navigation/Navigation'

type MainLayoutProps = {
  children: React.ReactNode
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  )
}
