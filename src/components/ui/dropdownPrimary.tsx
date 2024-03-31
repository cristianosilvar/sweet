import { ElementType, useState } from 'react'

import Button from '../button'
import { Dropdown } from '../dropdown'
import { DropdownItemProps } from '../dropdown/DropdownItem'

interface DropdownPrimaryProps {
  textButton: string
  iconButton?: ElementType
  closeOnSelect?: boolean
  items?: DropdownItemProps[]
}

const DropdownPrimary = ({
  items,
  textButton,
  iconButton,
  closeOnSelect = true,
}: DropdownPrimaryProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dropdown.Root>
      <Dropdown.Button
        isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {iconButton && <Button.Icon icon={iconButton} />}
        <Button.Content text={textButton} />
      </Dropdown.Button>
      <Dropdown.Menu isOpen={isOpen}>
        {items?.map(({ text, icon, iconClass, onClick, ...props }) => (
          <Dropdown.Item
            text={text}
            icon={icon}
            iconClass={iconClass}
            onClick={(event) => {
              if (closeOnSelect) {
                setIsOpen(false)
              }

              if (onClick) {
                onClick(event)
              }
            }}
            {...props}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown.Root>
  )
}

export default DropdownPrimary
