import { useSeasonContext } from 'context/season/seasonContext'
import RoundDetailsMenu from './RoundDetailsMenu'
import ComingSoon from 'components/ComingSoon'
import { courseData } from '../../data/course-data/wmgt-course-data'
import { RoundDataInterface } from '../../data/round-data/roundTypes'
import Scorecard from 'components/scorecard/Scorecard'
import ScorecardLegend from 'components/scorecard/ScorecardLegend'
import { Link } from 'react-router-dom'
import CourseScorecard from 'components/scorecard/CourseScorecard'
import PlayerScorecard from 'components/scorecard/PlayerScorecard'
import StatScorecard from 'components/scorecard/StatScorecard'
import { DataGod } from 'data/dataGod'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import RaceToTheFinish from './RaceToTheFinish'

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
  const { showEasyCourse, roundDetailsMode } = useSeasonContext()

  const easyCourse = courseData.filter((course) => course.alias === round.easyCourse)[0]
  const hardCourse = courseData.filter((course) => course.alias === round.hardCourse)[0]

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <div
      className="w-full py-6 relative
      flex flex-col justify-center items-center"
    >
      {/* <Link
        to="/season"
        className={`px-4 py-2 mb-4
        text-2xl md:text-3xl font-semibold text-black
        ${
          round.season === 6
            ? 'bg-emerald-500 shadow-insetemerald'
            : 'bg-indigo-500 shadow-insetindigo'
        }
        rounded-md
        flex justify-center items-center
        hover:shadow-lg hover:scale-105`}
      >
        SEASON MENU
      </Link> */}
      <RoundDetailsMenu
        round={{ season: round.season, round: round.round }}
        easyCourse={easyCourse}
        hardCourse={hardCourse}
      />
      {roundDetailsMode === 'full' && (
        <Scorecard round={round} easyCourse={easyCourse} hardCourse={hardCourse} />
      )}
      {roundDetailsMode === 'easy' && (
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
      {roundDetailsMode === 'hard' && (
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
      {roundDetailsMode === 'aces' && (
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
                coursePars={hardCourse.parByHole}
                acesData={DataGod.getRoundAcesPerHole({
                  season: round.season,
                  round: round.round
                })}
                key={nanoid()}
              />
            ))}
        </>
      )}
      {roundDetailsMode === 'coconuts' && (
        <>
          <CourseScorecard course={showEasyCourse ? easyCourse : hardCourse} />
          {DataGod.getCoconutRounds({ season: round.season, round: round.round }).scores.map(
            (playerRound) => (
              <PlayerScorecard
                playerRound={playerRound}
                coursePars={showEasyCourse ? easyCourse.parByHole : hardCourse.parByHole}
                key={nanoid()}
              />
            )
          )}
        </>
      )}
      {roundDetailsMode === 'race' && (
        // <ComingSoon
        //   text="🏇 COMING SOON 🏇"
        //   color={round.season === 7 ? 'indigo' : round.season === 6 ? 'emerald' : undefined}
        // />
        <RaceToTheFinish
          round={{
            ...round,
            scores: DataGod.getPodiumScores(round)
          }}
        />
      )}
      <ScorecardLegend />
    </div>
  )
}

export default RoundDetails
