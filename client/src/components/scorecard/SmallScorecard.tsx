import { CourseInterface } from 'data/course-data/wmgt-course-data'
import { RoundDataInterface } from 'data/round-data/s7-round-data'

type Props = {
  round: RoundDataInterface
  easyCourse: CourseInterface
  hardCourse: CourseInterface
}

const SmallScorecard: React.FC<Props> = ({ round, easyCourse, hardCourse }) => {
  return <div>SmallScorecard</div>
}

export default SmallScorecard
