import NavBtn from './header/HeaderNavBtn'

const MainMenu: React.FC = () => {
  return (
    <div>
      <nav className="w-full max-w-4xl py-2 flex flex-wrap justify-center items-center">
        <NavBtn btnMode="player" />
        <NavBtn btnMode="season" />
        <NavBtn btnMode="course" />
      </nav>
    </div>
  )
}

export default MainMenu
