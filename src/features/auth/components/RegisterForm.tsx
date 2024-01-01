import { Form } from '@/components/Form'
import useAuth from '@/hooks/useAuth'
import { useState } from 'react'
import * as z from 'zod'
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

type RegisterValues = {
  email: string
  password: string
}

const schema = z.object({
  email: z
    .string()
    .min(1, {
      message: '必須項目です'
    })
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

type RegisterFormProps = {
  onSuccess: () => void
}

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { signUp } = useAuth()
  const [error, setError] = useState('')

  return (
    <Form<RegisterValues, typeof schema>
      onSubmit={async (values) => {
        try {
          await signUp(values)
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
              Register
            </Button>
          </div>
        )
      }}
    </Form>
  )
}
