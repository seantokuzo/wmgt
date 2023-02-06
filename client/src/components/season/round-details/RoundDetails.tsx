import { useEffect } from 'react'
import { RoundDetailsMode, useSeasonContext } from 'context/season/seasonContext'
import RoundDetailsMenu from './RoundDetailsMenu'
import Scorecard from 'components/scorecard/Scorecard'
import ScorecardLegend from 'components/scorecard/ScorecardLegend'
import CourseScorecard from 'components/scorecard/CourseScorecard'
import PlayerScorecard from 'components/scorecard/PlayerScorecard'
import StatScorecard from 'components/scorecard/StatScorecard'
import RaceToTheFinish from './RaceToTheFinish'
import { courseData } from 'data/course-data/wmgt-course-data'
import { DataGod } from 'data/dataGod'
import { RoundDataInterface } from 'data/round-data/roundTypes'
import { nanoid } from 'nanoid'
import { CURRENT_SEASON } from 'utils/constants'
import RoundDetailBtn from './RoundDetailBtn'
import UpcomingRound from './UpcomingRound'
import UpcomingRound2 from './UpcomingRound2'
import { useAppContext } from 'context/appContext'
import NoCoconuts from 'components/scorecard/NoCoconuts'

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
  const { showEasyCourse, roundDetailsMode } = useSeasonContext()

  const easyCourse = courseData.filter((course) => course.alias === round.easyCourse)[0]
  const hardCourse = courseData.filter((course) => course.alias === round.hardCourse)[0]

  const upcomingRound = round.scores.length === 0 && round.season === CURRENT_SEASON

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      className="w-full my-4 relative
      flex flex-col justify-center items-center"
    >
      <RoundDetailsMenu
        round={{ season: round.season, round: round.round }}
        easyCourse={easyCourse}
        hardCourse={hardCourse}
        upcomingRound={upcomingRound}
      />
      {/* ********** ROUND DETAIL MODE BUTTONS ********** */}
      <div
        className="w-full md:w-3/4 max-w-xl px-1 mt-6
          flex flex-wrap justify-evenly items-center"
      >
        {!upcomingRound &&
          (Object.keys(modes) as RoundDetailsMode[]).map((m) => (
            <RoundDetailBtn
              key={`mode-btn-${m}`}
              season={round.season}
              btnText={modes[m]}
              btnMode={m}
            />
          ))}
        {/* {upcomingRound && <ComingSoon text="Upcoming Round" season={round.season} />} */}
      </div>
      {upcomingRound && windowSize.width >= 768 && (
        <UpcomingRound2 easyCourse={round.easyCourse} hardCourse={round.hardCourse} />
      )}
      {upcomingRound && windowSize.width < 768 && (
        <UpcomingRound easyCourse={round.easyCourse} hardCourse={round.hardCourse} />
      )}
      {!upcomingRound && roundDetailsMode === 'full' && (
        <Scorecard round={round} easyCourse={easyCourse} hardCourse={hardCourse} />
      )}
      {!upcomingRound && roundDetailsMode === 'easy' && (
        <>
          <CourseScorecard course={easyCourse} />
          {DataGod.getCourseLeaderboard([...round.scores], 'easy').map((playerRound) => (
            <PlayerScorecard
              playerRound={playerRound}
              coursePars={easyCourse.parByHole}
              key={nanoid()}
            />
          ))}
        </>
      )}
      {!upcomingRound && roundDetailsMode === 'hard' && (
        <>
          <CourseScorecard course={hardCourse} />
          {DataGod.getCourseLeaderboard([...round.scores], 'hard').map((playerRound) => (
            <PlayerScorecard
              playerRound={playerRound}
              coursePars={hardCourse.parByHole}
              key={nanoid()}
            />
          ))}
        </>
      )}
      {!upcomingRound && roundDetailsMode === 'aces' && (
        <>
          <CourseScorecard course={showEasyCourse ? easyCourse : hardCourse} />
          <StatScorecard
            label="# Aces"
            data={
              showEasyCourse
                ? DataGod.getRoundAcesPerHole({
                    season: round.season,
                    round: round.round
                  }).easyCourseNumAces
                : DataGod.getRoundAcesPerHole({
                    season: round.season,
                    round: round.round
                  }).hardCourseNumAces
            }
          />
          {round.scores
            .filter((score) => {
              return (
                score.easyScorecard.some((s) => s === 1) || score.hardScorecard.some((s) => s === 1)
              )
            })
            .sort((a, b) => b.numHoleInOne - a.numHoleInOne)
            .map((playerRound) => (
              <PlayerScorecard
                playerRound={playerRound}
                coursePars={showEasyCourse ? easyCourse.parByHole : hardCourse.parByHole}
                acesData={DataGod.getRoundAcesPerHole({
                  season: round.season,
                  round: round.round
                })}
                key={nanoid()}
              />
            ))}
        </>
      )}
      {!upcomingRound && roundDetailsMode === 'coconuts' && (
        <>
          <CourseScorecard course={showEasyCourse ? easyCourse : hardCourse} />
          {DataGod.getCoconutRounds({ season: round.season, round: round.round }).scores.length >
          0 ? (
            DataGod.getCoconutRounds({ season: round.season, round: round.round }).scores.map(
              (playerRound) => (
                <PlayerScorecard
                  playerRound={playerRound}
                  coursePars={showEasyCourse ? easyCourse.parByHole : hardCourse.parByHole}
                  key={nanoid()}
                />
              )
            )
          ) : (
            <NoCoconuts />
          )}
        </>
      )}
      {!upcomingRound && roundDetailsMode === 'race' && <RaceToTheFinish round={round} />}
      {!upcomingRound && roundDetailsMode !== 'race' && <ScorecardLegend />}
    </div>
  )
}

export default RoundDetails
