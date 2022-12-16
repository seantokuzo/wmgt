import { Routes, Route } from 'react-router-dom'
import Course from 'pages/Course'
import CourseDetails from 'components/course/CourseDetails'
import Header from 'components/Header'
import MainMenu from 'pages/Home'
import Player from 'pages/Player'
import Season from 'pages/Season'
import { useAppContext } from 'context/appContext'
import { courseData } from 'data/course-data/wmgt-course-data'
import { nanoid } from 'nanoid'
import { season7Data } from 'data/round-data/s7-round-data'
import RoundDetails from 'components/season/RoundDetails'
import { SeasonContextProvider } from 'context/season/seasonContext'
import { useEffect } from 'react'
import { season6Data } from 'data/round-data/s6-round-data'

// import { checkScores, convertRawRoundData } from './data/in_progress/s6r12_raw-data'
// import { convertRawRoundData } from './data/in_progress/s6r12_raw-data'
// import { checkScores } from './data/in_progress/s6r12_raw-data'
// checkScores(11)
// convertRawRoundData()

// import { getComboList } from 'data/player-data/AllPlayersList'
// getComboList()

// FLAG CONVERSION
// import { flagConverter, allPlayersList } from 'data/player-data/AllPlayersList'
// const notFound = allPlayersList.filter(
//   (player) => !flagConverter.some((p) => p.link === player.flag)
// )
// console.log('Flag Not Found: ', notFound)

export type PagePath = '/' | 'season' | 'course' | 'player'

function App() {
  // const { pathname } = useLocation()
  const { darkMode, changeWindowSize } = useAppContext()

  // BG COLOR IF USING BACKGROUND VIDEO
  // const bgColor = pathname === '/' ? 'bg-none' : darkMode ? 'bg-[#38280e]' : 'bg-white'
  const bgColor = darkMode ? 'bg-black' : 'bg-white'
  const textColor = !darkMode ? 'text-black' : 'text-white'
  // const bgColor = darkMode ? 'bg-[#1b1b1b]' : 'bg-white'
  // const textColor = !darkMode ? 'text-[#1b1b1b]' : 'text-white'

  // TRACK WINDOW SIZE FOR SCORECARD COMPONENT BIG OR SMALL
  useEffect(() => {
    const resizeListener = () => {
      changeWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
    // eslint-disable-next-line
  }, [])

  return (
    <div
      className={`w-full min-w-screen min-h-screen h-full font-reg
      ${bgColor}
      ${textColor}
      flex flex-col justify-start items-center`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route
          path="season"
          element={
            <SeasonContextProvider>
              <Season />
            </SeasonContextProvider>
          }
        >
          {season7Data.map((round) => (
            <Route
              path={`s${round.season}r${round.round}`}
              element={<RoundDetails round={round} />}
              key={nanoid()}
            />
          ))}
          {season6Data.map((round) => (
            <Route
              path={`s${round.season}r${round.round}`}
              element={<RoundDetails round={round} />}
              key={nanoid()}
            />
          ))}
          {/* WHEN ADDING SEASON DATA MAP ROUTES HERE */}
          {/* SAME MAPPING AS season7Data ABOVE */}
        </Route>
        <Route path="course" element={<Course />}>
          {courseData.map((course) => (
            <Route
              path={course.alias.toLowerCase()}
              element={<CourseDetails course={course} />}
              key={nanoid()}
            />
          ))}
        </Route>
        <Route path="player" element={<Player />} />
      </Routes>
    </div>
  )
}

export default App
