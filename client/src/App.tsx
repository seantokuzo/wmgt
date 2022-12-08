import { Routes, Route } from 'react-router-dom'
import Course from 'pages/Course'
import CourseDetails from 'components/course/CourseDetails'
import Header from 'components/Header'
import MainMenu from 'components/MainMenu'
import Player from 'pages/Player'
import Season from 'pages/Season'
import { useAppContext } from 'context/appContext'
import { courseData } from 'data/course-data/wmgt-course-data'
import { nanoid } from 'nanoid'
import { season7Data } from 'data/round-data/s7-round-data'
import RoundDetails from 'components/season/RoundDetails'
import { SeasonContextProvider } from 'context/season/seasonContext'
import { useEffect } from 'react'

// import { checkScores } from './data/in_progress/s6r12_raw-data'
// checkScores(12)

export type PagePath = '/' | 'season' | 'course' | 'player'

function App() {
  const { darkMode, changeWindowSize } = useAppContext()

  const themeClass = darkMode ? 'bg-black' : 'bg-white'
  const textColor = !darkMode ? 'text-black' : 'text-white'

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
      className={`min-h-screen h-full flex flex-col justify-start items-center ${themeClass} ${textColor} font-reg`}
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
