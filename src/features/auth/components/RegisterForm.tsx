import { Form, InputField } from '@/components/Form'
import useAuth from '@/hooks/useAuth'
import { useState } from 'react'
import * as z from 'zod'

type RegisterValues = {
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
      {({ register, formState }) => (
        <>
          <InputField
            type="email"
            label="Email"
            error={formState.errors['email']}
            registration={register('email')}
          />
          <InputField
            type="password"
            label="Password"
            error={formState.errors['password']}
            registration={register('password')}
          />
          {error && <span>{error}</span>}
          <div>
            <button type="submit">Register</button>
          </div>
        </>
      )}
    </Form>
  )
}
