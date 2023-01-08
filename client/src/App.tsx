import { Routes, Route } from 'react-router-dom'
import Course from 'pages/Course'
import CourseDetails from 'components/course/CourseDetails'
import Header from 'components/Header'
import Home from 'pages/Home'
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
import SeasonSummary from 'components/season/summary/SeasonSummary'
// import DataTester from 'DataTester'

export type PagePath = '/' | 'season' | 'course' | 'player'

function App() {
  const { darkMode, changeWindowSize } = useAppContext()

  // BG COLOR IF USING BACKGROUND VIDEO
  const bgColor = darkMode ? 'bg-black' : 'bg-white'
  const textColor = !darkMode ? 'text-black' : 'text-white'

  // TRACK WINDOW SIZE AND FIX SHITTY MOBILE VIEWPORT HEIGHT
  useEffect(() => {
    // SET vh CSS variable
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    // DEFINE LISTENER
    const resizeListener = () => {
      changeWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
      const vhNew = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vhNew}px`)
    }
    // ADD LISTENER
    window.addEventListener('resize', resizeListener)
    // CLEANUP LISTENER
    return () => window.removeEventListener('resize', resizeListener)
    // eslint-disable-next-line
  }, [])

  return (
    <div
      className={`app-container w-full min-w-screen h-full font-reg m-0
      ${bgColor}
      ${textColor}
      flex flex-col justify-start items-center`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="season"
          element={
            <SeasonContextProvider>
              <Season />
            </SeasonContextProvider>
          }
        >
          {/* SEASON 7 ROUTES */}
          <Route path="s7-summary" element={<SeasonSummary season={7} />} />
          {season7Data.map((round) => (
            <Route
              path={`s${round.season}r${round.round}`}
              element={<RoundDetails round={round} />}
              key={nanoid()}
            />
          ))}
          {/* SEASON 6 ROUTES */}
          <Route path="s6-summary" element={<SeasonSummary season={6} />} />
          {season6Data.map((round) => (
            <Route
              path={`s${round.season}r${round.round}`}
              element={<RoundDetails round={round} />}
              key={nanoid()}
            />
          ))}
          {/* SEASON 5 ROUTES */}
          <Route path="s5-summary" element={<SeasonSummary season={5} />} />
          {/* SEASON 4 ROUTES */}
          <Route path="s4-summary" element={<SeasonSummary season={4} />} />
          {/* SEASON 3 ROUTES */}
          <Route path="s3-summary" element={<SeasonSummary season={3} />} />
          {/* SEASON 2 ROUTES */}
          <Route path="s2-summary" element={<SeasonSummary season={2} />} />
          {/* SEASON 1 ROUTES */}
          <Route path="s1-summary" element={<SeasonSummary season={1} />} />
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
      {/* <DataTester /> */}
    </div>
  )
}

export default App
