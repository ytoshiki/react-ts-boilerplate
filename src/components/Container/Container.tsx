import { cn } from '@/lib/cn'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('max-w-6xl m-auto p-4', className && className)}>
      {children}
    </div>
  )
}
