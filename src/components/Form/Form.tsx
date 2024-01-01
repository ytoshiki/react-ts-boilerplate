import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps
} from 'react-hook-form'
import clsx from 'clsx'
import { zodResolver } from '@hookform/resolvers/zod'
import { ZodType, ZodTypeDef } from 'zod'
import { Form as UIForm } from '../Elements'

type FormProps<TFormValues extends Record<string, any>, Schema> = {
  schema?: Schema
  options?: UseFormProps<TFormValues>
  className?: string
  onSubmit: SubmitHandler<TFormValues>
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode
}

export const Form = <
  TFormValues extends Record<string, any> = Record<string, any>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>({
  schema,
  options,
  className,
  onSubmit,
  children
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema)
  })

  return (
    <UIForm {...methods}>
      <form
        className={clsx('form', className)}
        // ライブラリ依存のため
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children(methods)}
      </form>
    </UIForm>
  )
}
