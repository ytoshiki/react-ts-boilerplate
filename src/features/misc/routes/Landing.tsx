import { APP_TITLE, ENV, MODE } from '../../../config'
import { Link } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

export const Landing = () => {
  const { signOut } = useAuth()

  const onClick = () => {
    signOut()
  }

  return (
    <>
      <div>Hello World🌍</div>
      <div>{APP_TITLE}</div>
      <div>We are on:</div>
      <div>{MODE} mode</div>
      <div>{ENV} env</div>
      <div>
        <ul>
          <li>
            <Link to="/app/profile">Profile</Link>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <button onClick={onClick}> Sign out</button>
          </li>
        </ul>
      </div>
    </>
  )
}
