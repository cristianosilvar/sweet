import { ElementType, useState } from 'react'

import Button from '../button'
import { Dropdown } from '../dropdown'
import { ItemProps as MenuItemProps } from '../dropdown/DropdownItem'

interface DropdownPrimaryProps {
  textButton: string
  iconButton?: ElementType
  items?: MenuItemProps[]
}

const DropdownPrimary = ({
  items,
  textButton,
  iconButton,
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
        {items?.map(({ text, icon, iconClass }) => (
          <Dropdown.Item text={text} icon={icon} iconClass={iconClass} />
        ))}
      </Dropdown.Menu>
    </Dropdown.Root>
  )
}

export default DropdownPrimary
