import { useState } from 'react'
import { Minus } from 'lucide-react'
import { ChevronDown } from 'lucide-react'

import Button from '../Button'

const HeaderNavItem = () => {
  const [isOpen, setIsOpen] = useState(false)

  function tootleValue() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="relative">
      <Button.Root
        className="bg-blue-700 hover:bg-blue-800"
        type="button"
        onClick={tootleValue}
      >
        <Button.Content text="Category" />
        <Button.Icon icon={isOpen ? Minus : ChevronDown} />
      </Button.Root>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-44 w-full divide-y divide-gray-100 rounded-lg bg-gray-700 shadow">
          <ul className="py-2 text-sm text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
              >
                Games
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default HeaderNavItem
