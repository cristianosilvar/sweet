import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonIconProps {
  icon: ElementType
  className?: string
}

const ButtonIcon = ({ icon: Icon, className }: ButtonIconProps) => {
  return (
    <Icon className={twMerge('h-5 w-5 text-white transition-all', className)} />
  )
}

export default ButtonIcon
