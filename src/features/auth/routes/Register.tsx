import { RegisterForm } from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate()

  const onSuccess = () => {
    navigate('/app')
  }

  return (
    <div className="container relative">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password below
              <br /> to create your account
            </p>
          </div>
          <RegisterForm onSuccess={onSuccess} />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
