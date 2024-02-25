import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

const ButtonRoot = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        'flex w-full cursor-pointer items-center gap-3 rounded-lg px-6 py-2.5 text-center text-sm font-medium text-white focus:outline-none',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default ButtonRoot
