import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeaderNavProps extends ComponentProps<'nav'> {
  children: ReactNode
}

const HeaderNav = ({ children, className, ...props }: HeaderNavProps) => {
  return (
    <nav {...props} className={twMerge('flex gap-1', className)}>
      {children}
    </nav>
  )
}

export default HeaderNav
