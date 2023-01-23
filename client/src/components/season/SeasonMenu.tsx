import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from 'context/appContext'
import { useSeasonContext } from 'context/season/seasonContext'
import { courseData } from 'data/course-data/wmgt-course-data'
import { DataGod } from 'data/dataGod'
import { nanoid } from 'nanoid'
import { CURRENT_SEASON } from 'utils/constants'

type Props = {
  season: number
}

const SeasonMenu: React.FC<Props> = ({ season }) => {
  const seasonData = DataGod.getSeasonData(season)

  const { darkMode } = useAppContext()
  const { changeRoundDetailsMode, viewFrontNine, viewScorecard } = useSeasonContext()
  useEffect(() => {
    changeRoundDetailsMode('full')
    viewFrontNine()
    viewScorecard()
    // eslint-disable-next-line
  }, [])

  const menuColors = (
    menuPart: 'outer' | 'bg-shadow' | 'round' | 'top-course',
    upcomingRound = false
  ) => {
    if (upcomingRound) {
      return `border-2 brdr-s${season} bg-sh-s${season}`
    }
    if (menuPart === 'outer') {
      return `brdr-s${season} bg-trans-s${season}`
    }
    if (menuPart === 'bg-shadow') {
      return `bg-sh-s${season}`
    }
    if (menuPart === 'round') {
      return `border-l-2 brdr-s${season} bgfade-s${season}`
    }
    if (menuPart === 'top-course') {
      return `brdr-s${season}`
    }
  }

  return (
    <div
      className={`w-full max-w-2xl rounded-lg px-2 py-4 my-6
      font-scorenum text-center
      border-4 ${menuColors('outer')}
      last:mb-14
      flex flex-col justify-center items-center`}
    >
      <div
        className={`py-2 px-12 mt-4
        text-3xl font-semibold
        rounded-md border-2
        shadow-basic
        uppercase
        brdr-s${season}
        ${darkMode ? 'bg-black' : 'bg-white'}`}
      >
        {`SEASON ${season}`}
      </div>
      {season !== CURRENT_SEASON && <div className="text-4xl mt-4">🏆</div>}
      {DataGod.getSeasonWinner(season).map((winner) => {
        if (winner.flag === 'derp') {
          return (
            <div
              key={nanoid()}
              className={`mt-6 px-8 py-2
              bgfade-s${season} border-black border-4 rounded-md
              font-bold
              flex flex-col justify-center items-center`}
            >
              {/* <div>{winner.player}</div> */}
              <div>Current Round</div>
              <div className="text-2xl">{seasonData.length}</div>
            </div>
          )
        }
        return (
          <div
            className="mt-4 px-8 py-2
            bg-sh-gold brdr-gold border-2 rounded-md
            flex justify-center items-center"
            key={nanoid()}
          >
            {winner.flag && <div className="mr-4 text-2xl">{winner.flag}</div>}
            <div className="text-2xl font-bold text-black">{winner.player}</div>
            {winner.flag && <div className="ml-4 text-2xl">{winner.flag}</div>}
          </div>
        )
      })}
      {/* TODO */}
      {/* DELETE CONDITIONAL ONCE S8 HAS SOME SUMMARY DATA */}
      {season !== 9 && (
        <Link
          to={`/season/s${season}-summary`}
          className={`w-max my-6 py-2 px-6
        text-lg font-semibold
        rounded-md uppercase
        ${menuColors('bg-shadow')}
        hover:scale-105`}
        >
          Season Summary
        </Link>
      )}
      {seasonData.length > 0 && (
        <>
          {/* TODO */}
          {/* DELETE CONDITIONAL ONCE S8 HAS SOME SUMMARY DATA */}
          {season !== 8 && (
            <div className={`w-3/4 mt-6 mb-2 ${menuColors('outer')} border-2`}></div>
          )}
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
                  ${menuColors(
                    'round',
                    round.scores.length === 0 && round.season === CURRENT_SEASON
                  )}
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
