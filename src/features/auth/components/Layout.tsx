import { Head } from '@/components/Head'

type LayoutProps = {
  title?: string
  description?: string
  children: React.ReactNode
}

const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <div>
      <Head title={title} description={description} />
      {children}
    </div>
  )
}

export default Layout
