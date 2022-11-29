import NavBtn from './NavBtn'

const MainMenu: React.FC = () => {
  return (
    <div className="w-full max-w-4xl px-4 flex flex-col justify-center items-center">
      <img
        className="w-full max-w-4xl"
        src="/img/wmg_logo.png"
        alt="Walkabout Mini Golf Logo"
      />
      <h2>Stats By:</h2>
      <nav className="w-full max-w-xl py-2 flex flex-col justify-center items-center">
        <NavBtn btnMode="player" />
        <NavBtn btnMode="season" />
        <NavBtn btnMode="course" />
      </nav>
    </div>
  )
}

export default MainMenu
