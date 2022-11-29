import Course from 'components/course/Course'
import Header from 'components/Header'
import MainMenu from 'components/MainMenu'
import Player from 'components/player/Player'
import Season from 'components/season/Season'
import { useAppContext } from 'context/appContext'

function App() {
  const { darkMode, mode } = useAppContext()

  const themeClass = darkMode ? 'bg-black' : 'bg-white'
  const textColor = !darkMode ? 'text-black' : 'text-white'

  return (
    <div
      className={`w-full min-h-screen h-full flex flex-col justify-start items-center ${themeClass} ${textColor} font-reg`}
    >
      <Header />
      <div className="w-full max-w-6xl h-full mt-4 flex flex-col justify-center items-center">
        {mode === 'menu' && <MainMenu />}
        {mode === 'player' && <Player />}
        {mode === 'season' && <Season />}
        {mode === 'course' && <Course />}
      </div>
    </div>
  )
}

export default App
