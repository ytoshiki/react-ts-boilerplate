import { FieldError } from 'react-hook-form'

type FieldWrapperProps = {
  label?: string
  className?: string
  children: React.ReactNode
  error?: FieldError
}

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'children' | 'className'
>

export const FieldWrapper = ({
  children,
  label,
  className,
  error
}: FieldWrapperProps) => {
  return (
    <div>
      <label className={className}>
        {label}
        <div>{children}</div>
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message}>
          {error.message}
        </div>
      )}
    </div>
  )
}
