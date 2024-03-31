import { ComponentProps, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ItemProps {
  icon?: ElementType
  iconClass?: string
  text: string
}

export interface DropdownItemProps extends ComponentProps<'li'>, ItemProps {}

const DropdownItem = ({
  text,
  icon: Icon,
  iconClass,
  className,
  onClick,
  ...props
}: DropdownItemProps) => {
  return (
    <li
      {...props}
      onClick={onClick}
      className={twMerge(
        'flex cursor-pointer gap-3 px-4 py-3.5 hover:bg-white/[.03] hover:text-white',
        className,
      )}
    >
      {Icon && (
        <Icon className={twMerge('h-5 w-5 text-[#8F8F8F]', iconClass)} />
      )}
      <span className="font-medium text-[#fefefe]">{text}</span>
    </li>
  )
}

export default DropdownItem
