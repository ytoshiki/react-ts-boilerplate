import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper'
import { UseFormRegisterReturn } from 'react-hook-form'

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password'
  className?: string
  registration: Pick<
    UseFormRegisterReturn,
    'onChange' | 'onBlur' | 'ref' | 'name'
  >
}

export const InputField = ({
  type = 'text',
  label,
  className,
  registration,
  error
}: InputFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <input type={type} className={className} {...registration} />
    </FieldWrapper>
  )
}
