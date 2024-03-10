import { ComponentProps, ElementType } from 'react'
import { ChevronDown, Minus } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import Button from '../button'

interface ButtonProps extends ComponentProps<'button'> {
  isOpen: boolean
  icon?: ElementType
  text?: string
}

const DropdownButton = ({
  isOpen,
  onClick,
  className,
  children,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <Button.Root
      {...props}
      type="button"
      onClick={onClick}
      className={twMerge(
        'w-48 justify-between gap-6 border border-white/[.15] hover:border-white/[.35]',
        className,
      )}
    >
      {children}
      <Button.Icon
        icon={icon || isOpen ? Minus : ChevronDown}
        className="opacity-75"
      />
    </Button.Root>
  )
}

export default DropdownButton
