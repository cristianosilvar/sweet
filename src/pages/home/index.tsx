import DropDown from '../../components/Dropdown'
import Header from '../../components/Header'

const Home = () => {
  return (
    <div>
      <Header.Root>
        <Header.Logo />
        <Header.Nav>
          <DropDown
            items={[{ content: 'Movies' }, { content: 'Games' }]}
            className="w-48 justify-between gap-6 border-2 border-blue-950  bg-black  hover:border-blue-900"
          />
        </Header.Nav>
      </Header.Root>
    </div>
  )
}

export default Home
