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
import RoundDetails from 'components/season/round-details/RoundDetails'
import { SeasonContextProvider } from 'context/season/seasonContext'
import { useEffect } from 'react'
import { season6Data } from 'data/round-data/s6-round-data'
import DataTester from 'DataTester'
import SeasonSummary from 'components/season/summary/SeasonSummary'

export type PagePath = '/' | 'season' | 'course' | 'player'

function App() {
  const { darkMode, changeWindowSize } = useAppContext()

  // BG COLOR IF USING BACKGROUND VIDEO
  const bgColor = darkMode ? 'bg-black' : 'bg-white'
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
      className={`w-full min-w-[100vw] min-h-screen h-full font-reg
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
          <Route path="s6-summary" element={<SeasonSummary season={6} />} />
          {season6Data.map((round) => (
            <Route
              path={`s${round.season}r${round.round}`}
              element={<RoundDetails round={round} />}
              key={nanoid()}
            />
          ))}
          <Route path="s7-summary" element={<SeasonSummary season={7} />} />
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
      <DataTester />
    </div>
  )
}

export default App
