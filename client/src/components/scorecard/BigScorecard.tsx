import { useSeasonContext } from 'context/season/seasonContext'
import { CourseInterface } from 'data/course-data/wmgt-course-data'
import { RoundDataInterface } from 'data/round-data/s7-round-data'
import { nanoid } from 'nanoid'
import BigCourseScorecard from './BigCourseScorecard'
import BigPlayerScorecard from './BigPlayerScorecard'

type Props = {
  round: RoundDataInterface
  easyCourse: CourseInterface
  hardCourse: CourseInterface
}

const BigScorecard: React.FC<Props> = ({ round, easyCourse, hardCourse }) => {
  const { showEasyCourse, roundDetailsMode } = useSeasonContext()

  return (
    <>
      <BigCourseScorecard course={showEasyCourse ? easyCourse : hardCourse} />
      {roundDetailsMode === 'full' &&
        round.scores.map((playerRound) => (
          <BigPlayerScorecard
            playerRound={playerRound}
            coursePars={showEasyCourse ? easyCourse.parByHole : hardCourse.parByHole}
            key={nanoid()}
          />
        ))}
    </>
  )
}

export default BigScorecard
