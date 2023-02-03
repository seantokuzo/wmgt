import PlayerSelector from 'components/PlayerSelector'
import { useAppContext } from 'context/appContext'
import { useSeasonContext } from 'context/season/seasonContext'
import { CourseAlias, courseData } from 'data/course-data/wmgt-course-data'
import { DataGod } from 'data/dataGod'
import { allPlayersList } from 'data/player-data/AllPlayersList'
import { PlayerRoundInterface } from 'data/round-data/roundTypes'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CURRENT_SEASON } from 'utils/constants'
import NoTournamentData from './NoTournamentData'

type Props = {
  easyCourse: CourseAlias
  hardCourse: CourseAlias
}

const UpcomingRound: React.FC<Props> = ({ easyCourse, hardCourse }) => {
  const { darkMode, userPlayer } = useAppContext()
  const { showEasyCourse, viewCourse } = useSeasonContext()

  useEffect(() => {
    viewCourse('easy')
    window.scrollTo(0, 0)
    // eslint-disable-next-line
  }, [])

  const appearedIn = DataGod.getCourseRounds(showEasyCourse ? easyCourse : hardCourse)
  const sortedScores = appearedIn.map((round) => {
    if (showEasyCourse) {
      const sortedEasy = round.scores.sort((a, b) => a.easyRoundScore - b.easyRoundScore)
      return {
        ...round,
        scores: sortedEasy
      }
    }
    const sortedHard = round.scores.sort((a, b) => a.hardRoundScore - b.hardRoundScore)
    return {
      ...round,
      scores: sortedHard
    }
  })

  const easyCourseData = courseData.filter((c) => c.alias === easyCourse)[0]
  const hardCourseData = courseData.filter((c) => c.alias === hardCourse)[0]

  const colors = (easy: boolean) => {
    if ((easy && showEasyCourse) || (!easy && !showEasyCourse)) return `bg-sh-s${CURRENT_SEASON}`

    const bg = darkMode ? 'bg-black' : 'bg-white'
    return bg + ` border-2 brdr-s${CURRENT_SEASON}`
  }

  const courseToggleBtn = (easy: boolean) => {
    return (
      <button
        className={`min-w-1/4 px-4 py-2 mx-[0.5rem] my-2
      text-sm sm:text-base md:text-lg lg:text-xl
      flex justify-center hover:scale-105 transition-all
      rounded-xl sh-basic
      ${colors(easy)}`}
        onClick={() => viewCourse(easy ? 'easy' : 'hard')}
      >
        {easy ? 'Easy Course' : 'Hard Course'}
      </button>
    )
  }

  const courseLabelText = () => {
    return showEasyCourse
      ? `${easyCourseData.courseMoji + ' Easy ' + easyCourseData.courseMoji}`
      : `${hardCourseData.courseMoji + ' Hard ' + hardCourseData.courseMoji}`
  }

  const courseLabelEl = (easy: boolean) => {
    return (
      <div
        className={`w-[80%] max-w-xs min-w-max my-4 px-6 py-3
          ${
            easy
              ? 'bg-easyCourse sh-easyCourse brdr-easyCourse'
              : 'bg-hardCourse sh-hardCourse brdr-hardCourse'
          }
          border-2 rounded-md
          text-xl font-bold text-center`}
      >
        <p>{easy ? `${easyCourseData.course}` : `${hardCourseData.course}`}</p>
        <p>{courseLabelText()}</p>
      </div>
    )
  }

  const playerScoresEl = (score: PlayerRoundInterface) => {
    return (
      <>
        <p className="text-left">
          {allPlayersList.filter((p) => p.player === score.player)[0].flag + ' ' + score.player}
        </p>
        <p className="ml-6">{showEasyCourse ? score.easyRoundScore : score.hardRoundScore}</p>
      </>
    )
  }

  return (
    <div className="w-full flex flex-col justify-center items-center font-scorenum">
      <div
        className={`bg-sh-s${CURRENT_SEASON} px-6 py-2 rounded-lg border-2 brdr-s${CURRENT_SEASON} font-bold uppercase`}
      >
        UPCOMING ROUND
      </div>
      <p className="text-xs mt-2">(See below for course history)</p>
      <div className="mt-2 flex justify-evenly items-center">
        {courseToggleBtn(true)}
        {courseToggleBtn(false)}
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {courseLabelEl(showEasyCourse)}
        <div className="my-3 flex flex-col justify-center items-center">
          {!userPlayer && <p>Add Player</p>}
          <PlayerSelector />
        </div>
        {appearedIn.length > 0 ? (
          sortedScores.map((r, index) => {
            return (
              <div
                className={`w-fit ${
                  index === sortedScores.length - 1 ? 'mb-8' : 'mb-3'
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
                    sortedScores[index].scores
                      .filter((s) => {
                        if (showEasyCourse) {
                          return s.easyRoundScore <= sortedScores[index].scores[9].easyRoundScore
                        }
                        return s.hardRoundScore <= sortedScores[index].scores[9].hardRoundScore
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
                          {playerScoresEl(r.scores.filter((p) => p.player === userPlayer)[0])}
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
                      (showEasyCourse &&
                        score.easyRoundScore <= sortedScores[index].scores[9].easyRoundScore) ||
                      (!showEasyCourse &&
                        score.hardRoundScore <= sortedScores[index].scores[9].hardRoundScore)
                    ) {
                      return (
                        <div
                          className={`w-full px-2 rounded-md flex justify-between items-center ${
                            score.player === userPlayer && `py-1 bg-sh-s${r.season}`
                          }`}
                          key={nanoid()}
                        >
                          {playerScoresEl(score)}
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
            )
          })
        ) : (
          <NoTournamentData />
        )}
      </div>
    </div>
  )
}

export default UpcomingRound
