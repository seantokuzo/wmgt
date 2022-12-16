import { useSeasonContext } from 'context/season/seasonContext'
import RoundDetailsMenu from './RoundDetailsMenu'
import ComingSoon from 'components/ComingSoon'
import { courseData } from '../../data/course-data/wmgt-course-data'
import { RoundDataInterface } from '../../data/round-data/roundTypes'
import Scorecard from 'components/scorecard/Scorecard'
import ScorecardLegend from 'components/scorecard/ScorecardLegend'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import CourseScorecard from 'components/scorecard/CourseScorecard'
import PlayerScorecard from 'components/scorecard/PlayerScorecard'
import { nanoid } from 'nanoid'
import { ScorecardUtil } from 'components/scorecard/scorecardUtils'

type Props = {
  round: RoundDataInterface
}

export const modes = {
  full: 'Full Results',
  easy: 'Easy Course',
  hard: 'Hard Course',
  aces: 'Aces',
  coconuts: 'Coconuts',
  race: 'Race to the Finish'
}

const RoundDetails: React.FC<Props> = ({ round }) => {
  // const { windowSize } = useAppContext()
  const { roundDetailsMode, viewFrontNine } = useSeasonContext()

  const easyCourse = courseData.filter((course) => course.alias === round.easyCourse)[0]
  const hardCourse = courseData.filter((course) => course.alias === round.hardCourse)[0]

  useEffect(() => {
    viewFrontNine()
    // eslint-disable-next-line
  }, [])

  return (
    <div
      className="w-full py-6 relative
      flex flex-col justify-center items-center"
    >
      <Link
        to="/season"
        className="px-4 py-2 text-2xl md:text-3xl font-semibold
          flex justify-center items-center hover:shadow-lg hover:scale-105
          bg-[#38280e] shadow-insetbrown text-[#f8ff71] rounded-t-md"
      >
        SEASON MENU
      </Link>
      <RoundDetailsMenu
        round={{ season: round.season, round: round.round }}
        easyCourse={easyCourse}
        hardCourse={hardCourse}
      />
      {roundDetailsMode === 'full' && (
        <Scorecard round={round} easyCourse={easyCourse} hardCourse={hardCourse} />
      )}
      {roundDetailsMode === 'easy' && (
        <>
          <CourseScorecard course={easyCourse} />
          {ScorecardUtil.getCourseLeaderboard([...round.scores], 'easy').map((playerRound) => (
            <PlayerScorecard
              playerRound={playerRound}
              coursePars={easyCourse.parByHole}
              key={nanoid()}
            />
          ))}
        </>
      )}
      {roundDetailsMode === 'hard' && (
        <>
          <CourseScorecard course={hardCourse} />
          {ScorecardUtil.getCourseLeaderboard([...round.scores], 'hard').map((playerRound) => (
            <PlayerScorecard
              playerRound={playerRound}
              coursePars={hardCourse.parByHole}
              key={nanoid()}
            />
          ))}
        </>
      )}
      <div className="mt-8">
        {roundDetailsMode === 'aces' && <ComingSoon text="⛳️ COMING SOON ⛳️" />}
        {roundDetailsMode === 'coconuts' && <ComingSoon text="🥥 COMING SOON 🥥" />}
        {roundDetailsMode === 'race' && <ComingSoon text="🏇 COMING SOON 🏇" />}
      </div>
      <ScorecardLegend />
    </div>
  )
}

export default RoundDetails
