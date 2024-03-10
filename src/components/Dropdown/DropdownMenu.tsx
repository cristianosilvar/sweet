import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropdownMenuProps extends ComponentProps<'div'> {
  isOpen: boolean
  children: ReactNode
}

const DropdownMenu = ({
  isOpen,
  children,
  className,
  ...props
}: DropdownMenuProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        `absolute z-10 mt-2 w-full overflow-hidden  rounded-lg border border-white/[.15] shadow ${isOpen ? '' : 'hidden'}`,
        className,
      )}
    >
      <ul className="divide-y divide-white/[.15]  text-sm text-gray-200">
        {children}
      </ul>
    </div>
  )
}

export default DropdownMenu
