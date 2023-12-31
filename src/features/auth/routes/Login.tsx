import Layout from '../components/Layout'
import { LoginForm } from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const onSuccess = () => {
    navigate('/app')
  }

  return (
    <Layout title="login">
      <LoginForm onSuccess={onSuccess} />
    </Layout>
  )
}