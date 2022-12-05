import { useState } from 'react'
import { SelectedRound } from './Season'
import RoundDetailsMenu from './RoundDetailsMenu'
import CourseScorecard from 'components/scorecard/CourseScorecard'
import { RoundDataInterface, season7Data as S7_DATA } from '../../data/round-data/s7-round-data'
import { courseData } from '../../data/course-data/wmgt-course-data'
import PlayerScorecard from 'components/scorecard/PlayerScorecard'
import { nanoid } from 'nanoid'
// import RoundStats from './roundStats'

type Props = {
  selectedRound: SelectedRound
  setSelectedRound: React.Dispatch<React.SetStateAction<SelectedRound | ''>>
}

export type RoundDetailsMode = 'full' | 'easy' | 'hard' | 'aces' | 'coconuts'
export const modes = {
  full: 'Full Results',
  easy: 'Easy Course',
  hard: 'Hard Course',
  aces: 'Aces',
  coconuts: 'Coconuts'
}

let round: RoundDataInterface

const RoundDetails: React.FC<Props> = ({ selectedRound, setSelectedRound }) => {
  const [mode, setMode] = useState<RoundDetailsMode>('full')
  console.log(mode)

  if (selectedRound.season === 7) {
    round = S7_DATA.filter((r) => r.round === selectedRound.round)[0]
  }
  const easyCourse = courseData.filter((course) => course.alias === round.easyCourse)[0]
  const hardCourse = courseData.filter((course) => course.alias === round.hardCourse)[0]

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <RoundDetailsMenu
        mode={mode}
        setMode={setMode}
        selectedRound={selectedRound}
        easyCourse={easyCourse}
        hardCourse={hardCourse}
        setSelectedRound={setSelectedRound}
      />
      <CourseScorecard course={easyCourse} />
      {round.scores.map((playerRound) => (
        <PlayerScorecard playerRound={playerRound} coursePars={easyCourse.parByHole} easy={true} key={nanoid()} />
      ))}
    </div>
  )
}

export default RoundDetails
