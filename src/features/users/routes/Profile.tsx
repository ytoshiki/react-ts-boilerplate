import useAuth from '@/hooks/useAuth'

export const Profile = () => {
  const { session } = useAuth()

  if (!session?.user) {
    return null
  }

  return (
    <div>
      <div>Profile</div>
    </div>
  )
}
