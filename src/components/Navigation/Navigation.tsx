import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { useLocation } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { Button, Popover, PopoverContent, PopoverTrigger } from '../Elements'
import { Sun } from 'lucide-react'
import { useTheme } from '@/providers/theme-provider'

const routes = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Format',
    href: '/format'
  },
  {
    name: 'Profile',
    href: '/app/profile',
    visible: 'authenticated'
  },
  {
    name: 'Signup',
    href: '/auth/register',
    visible: 'unauthenticated'
  },
  {
    name: 'Login',
    href: '/auth/login',
    visible: 'unauthenticated'
  }
]

export const Navigation = () => {
  const { session, signOut } = useAuth()
  const location = useLocation()
  const { setTheme } = useTheme()

  const visibleRoutes = routes.filter((route) => {
    if (session?.user && route.visible === 'unauthenticated') return false
    if (!session?.user && route.visible === 'authenticated') return false
    return true
  })

  return (
    <>
      <div className="p-4 border-b">
        <div className="flex align-center justify-between">
          <nav>
            <ul className="flex">
              {visibleRoutes.map((route) => (
                <li key={route.href}>
                  <Link
                    to={route.href}
                    className={cn(
                      'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary',
                      location.pathname.startsWith(route.href)
                        ? 'font-medium text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-4">
            {session?.user && (
              <Button
                onClick={() => {
                  signOut()
                }}
              >
                Signout
              </Button>
            )}
            <Popover>
              <PopoverTrigger>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                >
                  <span>
                    <Sun className="h-5 w-5" />
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-40 grid" align="end">
                <Button
                  variant="ghost"
                  className="flex justify-start"
                  onClick={() => setTheme('light')}
                >
                  Light
                </Button>

                <Button
                  variant="ghost"
                  className="flex justify-start"
                  onClick={() => setTheme('dark')}
                >
                  Dark
                </Button>

                <Button
                  variant="ghost"
                  className="flex justify-start"
                  onClick={() => setTheme('system')}
                >
                  System
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  )
}
