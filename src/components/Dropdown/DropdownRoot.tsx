import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropdownRootProps extends ComponentProps<'div'> {
  children: ReactNode
}

const DropdownRoot = ({ children, className, ...props }: DropdownRootProps) => {
  return (
    <div {...props} className={twMerge('relative', className)}>
      {children}
    </div>
  )
}

export default DropdownRoot
