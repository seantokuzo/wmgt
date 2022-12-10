import { useSeasonContext } from 'context/season/seasonContext'
import { CourseInterface } from 'data/course-data/wmgt-course-data'
import { RoundDataInterface } from 'data/round-data/roundTypes'
import { nanoid } from 'nanoid'
import SmallCourseScorecard from './SmallCourseScorecard'
import SmallPlayerScorecard from './SmallPlayerScorecard'

type Props = {
  round: RoundDataInterface
  easyCourse: CourseInterface
  hardCourse: CourseInterface
}

const SmallScorecard: React.FC<Props> = ({ round, easyCourse, hardCourse }) => {
  const { showEasyCourse } = useSeasonContext()

  return (
    <>
      <SmallCourseScorecard course={showEasyCourse ? easyCourse : hardCourse} />
      {round.scores.map((playerRound) => (
        <SmallPlayerScorecard
          playerRound={playerRound}
          coursePars={showEasyCourse ? easyCourse.parByHole : hardCourse.parByHole}
          key={nanoid()}
        />
      ))}
    </>
  )
}

export default SmallScorecard
