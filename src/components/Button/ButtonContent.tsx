import { ComponentProps } from 'react'

interface ButtonContentProps extends ComponentProps<'span'> {
  text: string
}

const ButtonContent = ({ text, className, ...props }: ButtonContentProps) => {
  return (
    <span {...props} className={className}>
      {text}
    </span>
  )
}

export default ButtonContent
