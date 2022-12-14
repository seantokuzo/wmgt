import RoundDetailBtn from './RoundDetailBtn'
import { modes } from './RoundDetails'
import {
  courseFullImgLink,
  CourseInterface,
  coursesWithImages
} from '../../data/course-data/wmgt-course-data'
import { Link } from 'react-router-dom'
import { RoundDetailsMode, useSeasonContext } from 'context/season/seasonContext'
import { season6Data } from 'data/round-data/s6-round-data'
import { season7Data } from 'data/round-data/s7-round-data'

type Props = {
  round: { season: number; round: number }
  easyCourse: CourseInterface
  hardCourse: CourseInterface
}

const RoundDetailsMenu: React.FC<Props> = ({ round, easyCourse, hardCourse }) => {
  const { roundDetailsMode, showEasyCourse, viewFrontNine, viewScorecard } = useSeasonContext()

  const courseAlias =
    showEasyCourse || roundDetailsMode === 'easy' ? easyCourse.alias : hardCourse.alias

  const toggleRoundBtn = (nextNotPrev: boolean) => {
    const seasonData = round.season === 6 ? season6Data : season7Data
    if (nextNotPrev) {
      const isThereNext = seasonData.some((r) => r.round === round.round + 1)
      if (!isThereNext) return <div className="w-20 h-20"></div>
      return (
        <Link to={`/season/s${round.season}r${round.round + 1}`}>
          <div
            className="w-12 h-12 md:w-20 md:h-20
            text-sm md:text-xl bg-[#f8ff71]
            flex flex-col justify-center items-center
            font-bold shadow-inyellfocus rounded-full"
            onClick={() => {
              viewScorecard()
              viewFrontNine()
            }}
          >
            {`R${round.round + 1}`}
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </Link>
      )
    }

    const isTherePrev = seasonData.some((r) => r.round === round.round - 1)
    if (!isTherePrev) return <div className="w-20 h-20"></div>
    return (
      <Link to={`/season/s${round.season}r${round.round - 1}`}>
        <div
          className="w-12 h-12 md:w-20 md:h-20
          text-sm md:text-xl bg-[#f8ff71]
          flex flex-col justify-center items-center
          font-bold shadow-inyellfocus rounded-full"
          onClick={viewFrontNine}
        >
          {`R${round.round - 1}`}
          <i className="fa-solid fa-arrow-left"></i>
        </div>
      </Link>
    )
  }

  const courseLabelEl = (course: CourseInterface) => {
    return (
      <div className="w-1/2 md:w-auto py-2 px-4 mx-2 bg-[#f8ff71] rounded-md shadow-inyellfocus">
        <h3 className="text-base md:text-xl font-semibold">
          {course.course + ' ' + course.difficulty}
        </h3>
        <p className="text-sm md:text-base">({course.alias})</p>
        <p className="text-base md:text-lg">{course.courseMoji}</p>
      </div>
    )
  }

  return (
    <div
      className={`w-full max-w-4xl pb-2 rounded-lg
      text-[#38280e]
      ${!coursesWithImages.includes(courseAlias) && 'bg-[#f8ff71] shadow-insetyellow'}
      bg-no-repeat bg-center bg-cover
      flex flex-col justify-center items-center text-center`}
      style={{
        backgroundImage: coursesWithImages.includes(courseAlias)
          ? `url(${courseFullImgLink.replaceAll('<COURSE>', courseAlias)})`
          : ''
      }}
    >
      <div
        className="w-full bg-[#38280e] text-2xl py-3 shadow-insetbrown
        font-orb font-bold rounded-t-md text-[#f8ff71] tracking-wider"
      >
        {`SEASON ${round.season}`}
      </div>
      <div className="w-full flex justify-evenly items-center px-4">
        {toggleRoundBtn(false)}
        <div
          className="py-4 px-5 rounded-b-md mx-5
            text-2xl sm:text-4xl md:text-6xl font-bold font-scorenum 
            text-[#38280e] bg-[#f8ff71] shadow-inyellfocus
            flex flex-col justify-center items-center"
        >
          <div>ROUND</div>
          <div>{`${round.round}`}</div>
        </div>
        {toggleRoundBtn(true)}
      </div>
      <div
        className="w-full my-3 px-3 text-center
        flex justify-evenly items-start"
      >
        {courseLabelEl(easyCourse)}
        {courseLabelEl(hardCourse)}
      </div>
      <div
        className="w-full md:w-3/4 max-w-xl py-2 px-1
        flex flex-wrap justify-evenly items-center"
      >
        {(Object.keys(modes) as RoundDetailsMode[]).map((m) => (
          <RoundDetailBtn key={`mode-btn-${m}`} btnText={modes[m]} btnMode={m} />
        ))}
      </div>
    </div>
  )
}

export default RoundDetailsMenu
