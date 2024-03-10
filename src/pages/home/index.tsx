import { Dribbble, GalleryVerticalEnd, Gamepad2, Video } from 'lucide-react'

import Header from '../../components/header'
import DropdownPrimary from '../../components/ui/dropdownPrimary'

const Home = () => {
  return (
    <div>
      <Header.Root>
        <Header.Logo />
        <Header.Nav>
          <DropdownPrimary
            iconButton={GalleryVerticalEnd}
            textButton="category"
            items={[
              { text: 'sports', icon: Dribbble },
              { text: 'movies', icon: Video },
              { text: 'video games', icon: Gamepad2 },
            ]}
          />
        </Header.Nav>
      </Header.Root>
    </div>
  )
}

export default Home
