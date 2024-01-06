import type { Meta, StoryObj } from '@storybook/react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './card'

const meta: Meta<typeof Card> = {
  component: Card
}

export default meta
type Story = StoryObj<typeof Card>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>ENVIRONMENT 📍</CardTitle>
        <CardDescription className="flex items-center">
          <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2"></span>
          Currenty running on:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <div>
            <span className="font-bold">Development</span> mode
          </div>
        </div>
        <div>
          <span className="font-bold">Development</span> env
        </div>
      </CardContent>
    </Card>
  )
}
