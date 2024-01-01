import { Form } from '@/components/Form'
import * as z from 'zod'
import useAuth from '@/hooks/useAuth'
import {
  Button,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/components/Elements'
import { useState } from 'react'

type LoginValues = {
  email: string
  password: string
}

const schema = z.object({
  email: z
    .string()
    .min(1, '必須項目です')
    .email('メールアドレスの形式で入力してください')
    .regex(/^[\u0021-\u007e]+$/u, 'メールアドレスの形式で入力してください'),
  password: z
    .string()
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(
      /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
      'パスワードは半角英数字混合で入力してください'
    )
})

type LoginFormProps = {
  onSuccess: () => void
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { signInWithEmailAndPassword } = useAuth()
  const [error, setError] = useState('')

  return (
    <Form<LoginValues, typeof schema>
      onSubmit={async (values) => {
        try {
          await signInWithEmailAndPassword(values)
          onSuccess()
        } catch (e) {
          if (e instanceof Error) {
            setError(e.message)
          }
        }
      }}
      schema={schema}
      options={{
        shouldUnregister: true
      }}
    >
      {({ control }) => {
        return (
          <div className="grid">
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && <span className="mt-2">{error}</span>}
            <Button type="submit" className="mt-2">
              Login
            </Button>
          </div>
        )
      }}
    </Form>
  )
}
