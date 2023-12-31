import Layout from '../components/Layout'
import { RegisterForm } from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate()

  const onSuccess = () => {
    navigate('/app')
  }

  return (
    <Layout title="register">
      <RegisterForm onSuccess={onSuccess} />
    </Layout>
  )
}
