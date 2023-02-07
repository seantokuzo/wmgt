import { useSeasonContext } from 'context/season/seasonContext'
import { CourseInterface } from 'data/course-data/wmgt-course-data'
import { RoundDataInterface } from 'data/round-data/roundTypes'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import CourseScorecard from './CourseScorecard'
import PlayerScorecard from './PlayerScorecard'

type Props = {
  round: RoundDataInterface
  easyCourse: CourseInterface
  hardCourse: CourseInterface
}

const Scorecard: React.FC<Props> = ({ round, easyCourse, hardCourse }) => {
  const { showEasyCourse, viewFrontNine } = useSeasonContext()

  useEffect(() => {
    viewFrontNine()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <CourseScorecard course={showEasyCourse ? easyCourse : hardCourse} />
      {round.scores.map((playerRound) => (
        <PlayerScorecard
          playerRound={playerRound}
          coursePars={showEasyCourse ? easyCourse.parByHole : hardCourse.parByHole}
          roundObj={round}
          key={nanoid()}
        />
      ))}
    </>
  )
}

export default Scorecard
