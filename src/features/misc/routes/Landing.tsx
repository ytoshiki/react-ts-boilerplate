import { ENV, MODE } from '@/config'
import { Container } from '@/components/Container/'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/Elements'

export const Landing = () => {
  return (
    <>
      <Container className="py-10">
        <p className="text-4xl font-extrabold text-center mb-6">
          Everything is setup! We're good to go 🎉
        </p>
        <div className="grid gap-4">
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
                  <span className="font-bold">{MODE}</span> mode
                </div>
              </div>
              <div>
                <span className="font-bold">{ENV}</span> env
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tech Stack 💻</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <tbody>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <th className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Engine
                    </th>
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Vite
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <th className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Language
                    </th>
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Typescript
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <th className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Framework
                    </th>
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      React
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <th className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Auth / Database
                    </th>
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Supabase
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <th className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Styling / Icon
                    </th>
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      shadcn/ui, Lucide-react, tailwind, clsx
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <th className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Form
                    </th>
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      react-hook-form, zod
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <th className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Test
                    </th>
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      jest, msw, testing-library
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <th className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Others
                    </th>
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      husky, github-actions, eslint, prettier
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  )
}
