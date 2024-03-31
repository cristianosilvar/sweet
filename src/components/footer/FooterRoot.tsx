import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface FooterRootProps extends ComponentProps<'div'> {
  children: ReactNode
}

const FooterRoot = ({ children, className, ...props }: FooterRootProps) => {
  return (
    <div {...props} className={twMerge('pb-10 pt-20 text-center', className)}>
      {children}
    </div>
  )
}

export default FooterRoot
