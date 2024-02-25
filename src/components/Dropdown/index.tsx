import { ComponentProps, ReactNode, useState } from 'react'
import { Minus, ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import Button from '../Button'

interface ItemProps extends Omit<ComponentProps<'li'>, 'content'> {
  content: ReactNode
}

interface DropDownProps extends ComponentProps<'button'> {
  items: ItemProps[]
}

const DropDown = ({ items, className, ...propsButtons }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button.Root
        {...propsButtons}
        type="button"
        className={className}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Button.Content text="Category" />
        <Button.Icon
          icon={isOpen ? Minus : ChevronDown}
          className="opacity-75"
        />
      </Button.Root>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full    bg-gray-700 shadow">
          <ul className="divide-y divide-gray-100 text-sm text-gray-200">
            {items?.map(({ content, ...propsItem }) => (
              <li
                {...propsItem}
                className={twMerge(
                  'block cursor-pointer px-4 py-3.5  hover:bg-blue-900 hover:text-white',
                  propsItem.className,
                )}
              >
                {content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropDown
