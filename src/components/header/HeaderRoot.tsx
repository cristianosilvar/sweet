import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeaderRootProps extends ComponentProps<'div'> {
  children: ReactNode
}

const HeaderRoot = ({ children, className, ...props }: HeaderRootProps) => {
  return (
    <div
      {...props}
      className={twMerge('flex justify-between px-8 py-6', className)}
    >
      {children}
    </div>
  )
}

export default HeaderRoot
