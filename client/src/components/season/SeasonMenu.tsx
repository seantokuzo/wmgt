import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from 'context/appContext'
import { useSeasonContext } from 'context/season/seasonContext'
import { courseData } from 'data/course-data/wmgt-course-data'
import { season7Data } from 'data/round-data/s7-round-data'
import { season6Data } from 'data/round-data/s6-round-data'

type Props = {
  season: number
}

const SeasonMenu: React.FC<Props> = ({ season }) => {
  const seasonData = season === 7 ? season7Data : season === 6 ? season6Data : undefined

  const { darkMode } = useAppContext()
  const { changeRoundDetailsMode, viewFrontNine, viewScorecard } = useSeasonContext()
  useEffect(() => {
    changeRoundDetailsMode('full')
    viewFrontNine()
    viewScorecard()
    // eslint-disable-next-line
  }, [])

  const menuColors = (menuPart: 'outer' | 'bg-shadow' | 'round' | 'top-course') => {
    if (menuPart === 'outer') {
      return `brdr-s${season} bg-trans-s${season}`
    }
    if (menuPart === 'bg-shadow') {
      return `bg-sh-s${season}`
    }
    if (menuPart === 'round') {
      return `bg-sh-s${season}`
    }
    if (menuPart === 'top-course') {
      return `brdr-s${season}`
    }
  }

  return (
    <div
      className={`w-full max-w-2xl rounded-lg px-2 py-4 my-6
      font-scorenum uppercase text-center
      border-4 ${menuColors('outer')}
      last:mb-14
      flex flex-col justify-center items-center`}
    >
      <div
        className={`py-2 px-12 mt-4
        text-3xl font-semibold
        rounded-md border-2
        shadow-basic
        brdr-s${season}
        ${darkMode ? 'bg-black' : 'bg-white'}`}
      >
        {`SEASON ${season}`}
      </div>
      <Link
        to={`/season/s${season}-summary`}
        className={`w-max my-8 py-2 px-6
        text-lg font-semibold
        rounded-md
        ${menuColors('bg-shadow')}
        hover:scale-105`}
      >
        Season Summary
      </Link>
      {seasonData && (
        <>
          <div className={`w-3/4 my-2 ${menuColors('outer')} border-2`}></div>
          <h2 className="text-2xl font-semibold my-3">ROUND RESULTS</h2>
          <div
            className="w-full
        flex flex-wrap justify-evenly items-center"
          >
            {seasonData.map((round, i) => {
              const easyMoji = courseData.filter((c) => c.alias === round.easyCourse)[0].courseMoji
              const hardMoji = courseData.filter((c) => c.alias === round.hardCourse)[0].courseMoji
              return (
                <Link
                  to={`/season/s${round.season}r${round.round}`}
                  className={`mx-2 my-3 px-4 py-2 rounded-lg
              font-bold
              flex flex-col justify-center items-center
              ${menuColors('round')}
              hover:scale-105`}
                  key={`${round.easyCourse}-${i}`}
                >
                  <div
                    className={`w-full text-2xl rounded-lg py-2
              ${darkMode ? 'bg-black' : 'bg-white'}`}
                  >
                    {round.round}
                  </div>
                  <div
                    className={`w-full mt-2
              rounded-sm
              ${darkMode ? 'bg-black' : 'bg-white'}`}
                  >
                    <div className={`text-md px-2 border-b-2 ${menuColors('top-course')}`}>
                      {easyMoji + ' ' + round.easyCourse + ' ' + easyMoji}
                    </div>
                    <div className="text-md px-2">
                      {hardMoji + ' ' + round.hardCourse + ' ' + hardMoji}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default SeasonMenu
