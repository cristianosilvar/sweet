import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonContentProps extends ComponentProps<'span'> {
  text: string
}

const ButtonContent = ({ text, className, ...props }: ButtonContentProps) => {
  return (
    <span {...props} className={twMerge('transition-all', className)}>
      {text}
    </span>
  )
}

export default ButtonContent
