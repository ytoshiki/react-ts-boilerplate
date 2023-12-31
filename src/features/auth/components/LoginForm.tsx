import { InputField, Form } from '@/components/Form'
import * as z from 'zod'
import useAuth from '@/hooks/useAuth'

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

  return (
    <Form<LoginValues, typeof schema>
      onSubmit={async (values) => {
        await signInWithEmailAndPassword(values)
        onSuccess()
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
          <button type="submit">Register</button>
        </>
      )}
    </Form>
  )
}
