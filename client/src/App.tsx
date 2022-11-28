import Header from 'components/header/Header'
import MainMenu from 'components/MainMenu'
import { useAppContext } from 'context/appContext'

function App() {
  const { darkMode } = useAppContext()

  const themeClass = darkMode ? 'bg-black' : 'bg-white'
  const textColor = !darkMode ? 'text-black' : 'text-white'

  return (
    <div
      className={`w-full min-h-screen h-full flex flex-col justify-center items-center ${themeClass} font-reg`}
    >
      <Header />
      <img
        className="w-full max-w-4xl"
        src="/img/wmg_logo.png"
        alt="Walkabout Mini Golf Logo"
      />
      <MainMenu />
    </div>
  )
}

export default App
