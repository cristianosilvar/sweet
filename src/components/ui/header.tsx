import { useNavigate } from 'react-router-dom'
import { Dribbble, GalleryVerticalEnd, Gamepad2, Video } from 'lucide-react'

import { default as HeaderComponent } from '../header'
import DropdownPrimary from './dropdownPrimary'

const Header = () => {
  const navigate = useNavigate()

  return (
    <HeaderComponent.Root>
      <HeaderComponent.Logo onClick={() => navigate('sweet')} />
      <HeaderComponent.Nav>
        <DropdownPrimary
          iconButton={GalleryVerticalEnd}
          textButton="category"
          items={[
            {
              text: 'sports',
              icon: Dribbble,
              onClick: () => navigate('/sweet/category/1'),
            },
            {
              text: 'movies',
              icon: Video,
              onClick: () => navigate('/sweet/category/2'),
            },
            {
              text: 'video games',
              icon: Gamepad2,
              onClick: () => navigate('/sweet/category/3'),
            },
          ]}
        />
      </HeaderComponent.Nav>
    </HeaderComponent.Root>
  )
}

export default Header
