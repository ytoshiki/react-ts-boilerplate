import { APP_TITLE, ENV, MODE } from '../../../config'
import { Link } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { useTheme } from '@/providers/theme-provider'

export const Landing = () => {
  const { signOut } = useAuth()
  const { theme, setTheme } = useTheme()

  const onClick = () => {
    signOut()
  }

  return (
    <>
      <div>
        <div>Hello World🌍</div>
        <div>{APP_TITLE}</div>
        <div>We are on:</div>
        <div>{MODE} mode</div>
        <div>{ENV} env</div>
        <div>{theme}</div>
        <div>
          <ul>
            <li onClick={() => setTheme('light')}>Light</li>
            <li onClick={() => setTheme('dark')}>Dark</li>
            <li onClick={() => setTheme('system')}>System</li>
          </ul>
        </div>
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
      </div>
      <div></div>
    </>
  )
}
