import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { ChevronRight, Mail, Loader2 } from 'lucide-react'

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Button>Primary</Button>
}

export const Secondary: Story = {
  render: () => <Button variant="secondary">Secondary</Button>
}

export const Destructive: Story = {
  render: () => <Button variant="destructive">Destructive</Button>
}

export const Outline: Story = {
  render: () => <Button variant="outline">Outline</Button>
}

export const Link: Story = {
  render: () => <Button variant="link">Link</Button>
}

export const Icon: Story = {
  render: () => (
    <Button variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </Button>
  )
}

export const Icon2: Story = {
  render: () => (
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  )
}

export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}
