import useAuth from '@/hooks/useAuth'
import { Container } from '@/components/Container'

export const Profile = () => {
  const { session } = useAuth()

  if (!session?.user) {
    return null
  }

  return (
    <Container>
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="text-md">This page is only accessible if authenticated</p>
    </Container>
  )
}
