import { useState } from 'react'
import RoundDetailsMenu from './RoundDetailsMenu'
import CourseScorecard from 'components/scorecard/CourseScorecard'
import { RoundDataInterface, season7Data as S7_DATA } from '../../data/round-data/s7-round-data'
import { courseData } from '../../data/course-data/wmgt-course-data'
import PlayerScorecard from 'components/scorecard/PlayerScorecard'
import { nanoid } from 'nanoid'
// import RoundStats from './roundStats'

type Props = {
  round: RoundDataInterface
}

export type RoundDetailsMode = 'full' | 'easy' | 'hard' | 'aces' | 'coconuts'
export const modes = {
  full: 'Full Results',
  easy: 'Easy Course',
  hard: 'Hard Course',
  aces: 'Aces',
  coconuts: 'Coconuts'
}

const RoundDetails: React.FC<Props> = ({ round }) => {
  const [mode, setMode] = useState<RoundDetailsMode>('full')
  const [showEasyCourse, setShowEasyCourse] = useState<boolean>(true)
  const [showScoreTracker, setShowScoreTracker] = useState<boolean>(false)

  if (round.season === 7) {
    round = S7_DATA.filter((r) => r.round === round.round)[0]
  }
  const easyCourse = courseData.filter((course) => course.alias === round.easyCourse)[0]
  const hardCourse = courseData.filter((course) => course.alias === round.hardCourse)[0]

  return (
    <div className="relative w-full flex flex-col justify-center items-center py-6">
      <RoundDetailsMenu
        mode={mode}
        setMode={setMode}
        round={{ season: round.season, round: round.round }}
        easyCourse={easyCourse}
        hardCourse={hardCourse}
      />
      <CourseScorecard
        mode={mode}
        course={showEasyCourse ? easyCourse : hardCourse}
        showEasyCourse={showEasyCourse}
        setShowEasyCourse={setShowEasyCourse}
        showScoreTracker={showScoreTracker}
        setShowScoreTracker={setShowScoreTracker}
      />
      {mode === 'full' &&
        round.scores.map((playerRound) => (
          <PlayerScorecard
            playerRound={playerRound}
            coursePars={showEasyCourse ? easyCourse.parByHole : hardCourse.parByHole}
            easy={showEasyCourse}
            showScoreTracker={showScoreTracker}
            key={nanoid()}
          />
        ))}
      {/* <PlayerScorecard
        playerRound={round.scores[0]}
        coursePars={easyCourse.parByHole}
        easy={true}
        key={nanoid()}
      /> */}
      {mode === 'easy' && (
        <div
          className="border-2 py-8 px-16 rounded-md text-4xl font-bold mt-10 animate-bounce
          flex justify-center items-center"
        >
          COMING SOON
        </div>
      )}
      {mode === 'hard' && (
        <div
          className="border-2 py-8 px-16 rounded-md text-4xl font-bold mt-10 animate-bounce
          flex justify-center items-center"
        >
          COMING SOON
        </div>
      )}
      {mode === 'aces' && (
        <div
          className="border-2 py-8 px-16 rounded-md text-4xl font-bold mt-10 animate-bounce
          flex justify-center items-center"
        >
          ⛳️ COMING SOON ⛳️
        </div>
      )}
      {mode === 'coconuts' && (
        <div
          className="border-2 py-8 px-16 rounded-md text-4xl font-bold mt-10 animate-bounce
          flex justify-center items-center"
        >
          🥥 COMING SOON 🥥
        </div>
      )}
    </div>
  )
}

export default RoundDetails
