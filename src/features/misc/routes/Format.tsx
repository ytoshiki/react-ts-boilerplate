import {
  Button,
  Alert,
  AlertDescription,
  AlertTitle
} from '@/components/Elements'
import {
  ChevronRight,
  Mail,
  Loader2,
  Terminal,
  AlertCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/Container/Container'

export const Format = () => {
  return (
    <Container>
      <h2>Button</h2>
      <div>
        <Button>Primary</Button>
      </div>
      <div>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div>
        <Button variant="outline">Primary</Button>
      </div>
      <div>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div>
        <Button variant="outline">Outline</Button>
      </div>
      <div>
        <Button variant="link">Link</Button>
      </div>
      <div>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div>
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
      </div>
      <div>
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </div>
      <div>
        <Button asChild>
          <Link to="/">As Child</Link>
        </Button>
      </div>
      <h2>Alert</h2>
      <div className="max-w-lg">
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
      <div className="max-w-lg">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </div>
    </Container>
  )
}
