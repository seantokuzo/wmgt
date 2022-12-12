import { useAppContext } from 'context/appContext'
import { useSeasonContext } from 'context/season/seasonContext'
import RoundDetailsMenu from './RoundDetailsMenu'
import ComingSoon from 'components/ComingSoon'
import { courseData } from '../../data/course-data/wmgt-course-data'
import { RoundDataInterface } from '../../data/round-data/roundTypes'
import BigScorecard from 'components/scorecard/BigScorecard'
import SmallScorecard from 'components/scorecard/SmallScorecard'

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
  const { windowSize } = useAppContext()
  const { roundDetailsMode } = useSeasonContext()

  const easyCourse = courseData.filter((course) => course.alias === round.easyCourse)[0]
  const hardCourse = courseData.filter((course) => course.alias === round.hardCourse)[0]

  return (
    <div className="relative w-full flex flex-col justify-center items-center py-6">
      <RoundDetailsMenu
        round={{ season: round.season, round: round.round }}
        easyCourse={easyCourse}
        hardCourse={hardCourse}
      />
      {roundDetailsMode === 'full' &&
        (windowSize.width >= 768 ? (
          <BigScorecard round={round} easyCourse={easyCourse} hardCourse={hardCourse} />
        ) : (
          <SmallScorecard round={round} easyCourse={easyCourse} hardCourse={hardCourse} />
        ))}
      <div className="mt-8">
        {roundDetailsMode === 'easy' && <ComingSoon text="COMING SOON" />}
        {roundDetailsMode === 'hard' && <ComingSoon text="COMING SOON" />}
        {roundDetailsMode === 'aces' && <ComingSoon text="⛳️ COMING SOON ⛳️" />}
        {roundDetailsMode === 'coconuts' && <ComingSoon text="🥥 COMING SOON 🥥" />}
        {roundDetailsMode === 'race' && <ComingSoon text="🏇 COMING SOON 🏇" />}
      </div>
    </div>
  )
}

export default RoundDetails
