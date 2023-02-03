import PlayerSelector from 'components/PlayerSelector'
import { useAppContext } from 'context/appContext'
import { useSeasonContext } from 'context/season/seasonContext'
import { CourseAlias, courseData, CourseInterface } from 'data/course-data/wmgt-course-data'
import { DataGod } from 'data/dataGod'
import { allPlayersList } from 'data/player-data/AllPlayersList'
import { PlayerRoundInterface, RoundDataInterface } from 'data/round-data/roundTypes'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CURRENT_SEASON } from 'utils/constants'
import NoTournamentData from './NoTournamentData'

type Props = {
  easyCourse: CourseAlias
  hardCourse: CourseAlias
}

const UpcomingRound2: React.FC<Props> = ({ easyCourse, hardCourse }) => {
  const { darkMode, userPlayer } = useAppContext()
  const { viewCourse } = useSeasonContext()

  useEffect(() => {
    viewCourse('easy')
    // window.scrollTo(0, 0)
    // eslint-disable-next-line
  }, [])

  const sortScores = (appearedIn: RoundDataInterface[], easy: boolean) =>
    appearedIn.map((round) => {
      if (easy) {
        const sortedEasy = [...round.scores].sort((a, b) => a.easyRoundScore - b.easyRoundScore)
        return {
          ...round,
          scores: sortedEasy
        }
      }
      const sortedHard = [...round.scores].sort((a, b) => a.hardRoundScore - b.hardRoundScore)
      return {
        ...round,
        scores: sortedHard
      }
    })

  const easyAppearedIn = sortScores(DataGod.getCourseRounds(easyCourse), true)
  const hardAppearedIn = sortScores(DataGod.getCourseRounds(hardCourse), false)

  const easyCourseData = courseData.filter((c) => c.alias === easyCourse)[0]
  const hardCourseData = courseData.filter((c) => c.alias === hardCourse)[0]

  const courseLabelText = (easy: boolean) => {
    return easy
      ? `${easyCourseData.courseMoji + ' Easy ' + easyCourseData.courseMoji}`
      : `${hardCourseData.courseMoji + ' Hard ' + hardCourseData.courseMoji}`
  }

  const courseLabel = (courseData: CourseInterface, easy: boolean) => {
    return (
      <div
        className={`w-[90%] my-4 px-6 py-3
          ${
            easy
              ? 'bg-easyCourse sh-easyCourse brdr-easyCourse'
              : 'bg-hardCourse sh-hardCourse brdr-hardCourse'
          }
          border-2 rounded-md
          text-xl font-bold text-center`}
      >
        <p>{courseData.course}</p>
        <p>{courseLabelText(easy)}</p>
      </div>
    )
  }

  const playerScoresEl = (score: PlayerRoundInterface, easy: boolean) => {
    return (
      <div className='w-full flex justify-between'>
        <p className="text-left">
          {allPlayersList.filter((p) => p.player === score.player)[0].flag + ' ' + score.player}
        </p>
        <p className="ml-6">{easy ? score.easyRoundScore : score.hardRoundScore}</p>
      </div>
    )
  }

  const courseHistoryEl = (appearedIn: RoundDataInterface[], easy: boolean) => {
    return appearedIn.length > 0 ? (
      appearedIn.map((r, index) => {
        return (
          <div
            className={`w-full px-8 ${
              index === appearedIn.length - 1 ? 'mb-8' : 'mb-3'
            } flex flex-col justify-center items-center`}
            key={nanoid()}
          >
            <Link
              to={`/season/s${r.season}r${r.round}`}
              className="w-full my-2 px-4 py-3
                bg-sh-gold brdr-gold border-2 rounded-md
                text-black text-center"
            >
              <p className="text-xl font-bold">{`Season ${r.season} Round ${r.round}`}</p>
              <p className="text-xxs">(Click to see Round)</p>
            </Link>
            <div className="w-fit">
              {userPlayer &&
                r.scores.filter((p) => p.player === userPlayer)[0] &&
                appearedIn[index].scores
                  .filter((s) => {
                    if (easy) {
                      return s.easyRoundScore <= appearedIn[index].scores[9].easyRoundScore
                    }
                    return s.hardRoundScore <= appearedIn[index].scores[9].hardRoundScore
                  })
                  .findIndex((s) => s.player === userPlayer) < 0 && (
                  <div className={`my-2`}>
                    <p
                      className={`w-full border-b-2 ${
                        darkMode ? 'border-white' : 'border-black'
                      } text-center`}
                    >
                      {"Selected Player's Score"}
                    </p>
                    <div
                      className={`w-full py-1 flex justify-between items-center px-2 rounded-b-md bg-sh-s${r.season}`}
                    >
                      {playerScoresEl(r.scores.filter((p) => p.player === userPlayer)[0], easy)}
                    </div>
                  </div>
                )}
              <p
                className={`w-full border-b-2 ${
                  darkMode ? 'border-white' : 'border-black'
                } text-center`}
              >
                Top Ten Scores
              </p>
              {r.scores.map((score) => {
                if (
                  (easy && score.easyRoundScore <= appearedIn[index].scores[9].easyRoundScore) ||
                  (!easy && score.hardRoundScore <= appearedIn[index].scores[9].hardRoundScore)
                ) {
                  return (
                    <div
                      className={`w-full px-2 rounded-md flex justify-between items-center ${
                        score.player === userPlayer && `py-1 bg-sh-s${r.season}`
                      }`}
                      key={nanoid()}
                    >
                      {playerScoresEl(score, easy)}
                    </div>
                  )
                }
              })}
            </div>
          </div>
        )
      })
    ) : (
      <>
        <NoTournamentData />
      </>
    )
  }

  return (
    <div className="w-1/2 min-w-[48rem] flex flex-col justify-center items-center font-scorenum">
      <div className="w-full my-3 flex flex-col justify-center items-center">
        <div
          className={`bg-sh-s${CURRENT_SEASON} px-6 py-2 rounded-lg border-2 brdr-s${CURRENT_SEASON} font-bold uppercase`}
        >
          UPCOMING ROUND
        </div>
        <p className="text-xs mt-2">(See below for course history)</p>
        <div className="min-w-[4rem] my-3 flex flex-col justify-center items-center">
          {!userPlayer && <p>Add Player</p>}
          <PlayerSelector />
        </div>
        <div className="w-full max-w-3xl mt-4 flex justify-center items-start">
          <div className="w-1/2 flex flex-col justify-center items-center">
            {courseLabel(easyCourseData, true)}
            {courseHistoryEl(easyAppearedIn, true)}
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            {courseLabel(hardCourseData, false)}
            {courseHistoryEl(hardAppearedIn, false)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingRound2
