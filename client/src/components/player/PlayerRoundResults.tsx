import { useState } from 'react'
import { useAppContext } from 'context/appContext'
import { PlayerDataGod } from 'data/playerDataGod'
import { RoundDataInterface, RoundIdentifier } from 'data/round-data/roundTypes'
import NoStatsForPlayer from './NoStatsForPlayer'
import { nanoid } from 'nanoid'
import CourseScorecard from 'components/scorecard/CourseScorecard'
import { DataGod } from 'data/dataGod'
import PlayerScorecard from 'components/scorecard/PlayerScorecard'

const PlayerRoundResults = () => {
  const [selectedRound, setSelectedRound] = useState<RoundIdentifier | ''>('')
  const { userPlayer } = useAppContext()

  const allPlayerRounds = PlayerDataGod.getPlayerRoundsPerSeason(userPlayer)
  const seasonsPlayed = allPlayerRounds
    .reduce((acc: number[], round) => {
      if (!acc.includes(round.season)) {
        acc.push(round.season)
      }
      return acc
    }, [])
    .reverse()

  if (!userPlayer) return <></>

  if (allPlayerRounds.length === 0) {
    return <NoStatsForPlayer />
  }

  const selectedRoundData = PlayerDataGod.getPlayerRoundData(selectedRound, userPlayer)

  const appearedInMenu = () => {
    return (
      <>
        <div className="py-1 font-bold text-center">
          <p className="uppercase">Rounds played:</p>
        </div>
        {/* <p className="text-xs md:text-sm lg:text-base mt-3">(Select a Round for Details)</p> */}
        <div className="w-full max-w-4xl flex flex-col justify-center items-center">
          {seasonsPlayed.map((season) => {
            return (
              <div className="flex flex-col justify-center items-center" key={nanoid()}>
                <p
                  className={`mt-3 mb-2 px-10 py-2
                  text-base lg:text-lg font-bold font-scorenum
                  bg-sh-s${season} rounded-md`}
                >
                  {'Season ' + season}
                </p>
                <div className="w-full flex flex-wrap justify-center items-center">
                  {allPlayerRounds.map((round) => {
                    if (round.season === season) {
                      const easyCourse = DataGod.getCourseData(round.easyCourse)
                      const hardCourse = DataGod.getCourseData(round.hardCourse)
                      return (
                        <div
                          className={`w-fit mx-2 my-4
                          text-center cursor-pointer hover:scale-105 transition-all
                          flex flex-col justify-center items-center
                          brdr-s${round.season} border-x-2 border-t-2 rounded-md`}
                          // onClick={() => setSelectedRound({ season, round: round.round })}
                          key={nanoid()}
                        >
                          <div
                            className={`w-full px-6 py-1
                            text-lg font-bold font-scorenum
                            bgfade-s${round.season}
                            brdr-s${round.season} border-b-[1px]`}
                          >
                            {'Round ' + round.round}
                          </div>
                          {/* <Link
                          to={`/season/s${season}r${round.round}`}
                          className="underline text-xxs"
                          >
                          Go to Round
                        </Link> */}
                          <div
                            className="w-full mt-2
                            text-xxs sm:text-xs md:text-sm lg:text-base
                            flex justify-evenly items-center"
                          >
                            <div className="ml-2 md:ml-3 flex flex-col justify-center items-center">
                              <div>{easyCourse.courseMoji}</div>
                              <div>{easyCourse.alias}</div>
                              <div>{round.scores[0].easyRoundScore}</div>
                            </div>
                            <div
                              className={`w-8 h-8 md:w-10 md:h-10
                              mx-2 md:mx-3
                              rounded-full p-1
                              bg-sh-s${round.season}
                              brdr-s${round.season} border-2
                              flex flex-col justify-center items-center
                              text-black font-bold`}
                            >
                              {round.scores[0].totalToPar}
                            </div>
                            <div
                              className="mr-2 md:mr-3
                              flex flex-col justify-center items-center">
                              <div>{hardCourse.courseMoji}</div>
                              <div>{hardCourse.alias}</div>
                              <div>{round.scores[0].hardRoundScore}</div>
                            </div>
                          </div>
                          <div className="w-full mt-2 flex flex-col justify-center items-center">
                            {/* <div className="w-full text-xxs mt-2 uppercase">finish</div> */}
                            <div
                              className={`w-full py-1
                              text-sm font-bold text-black
                              flex flex-col justify-center items-center
                              ${
                                round.scores[0].roundRank === 1
                                  ? 'bg-sh-gold font-bold text-black'
                                  : round.scores[0].roundRank === 2
                                  ? 'bg-sh-silver font-bold text-black'
                                  : round.scores[0].roundRank === 3
                                  ? 'bg-sh-bronze font-bold text-black'
                                  : round.scores[0].roundRank <= 10
                                  ? 'bg-sh-topTenGreen text-black'
                                  : `bg-sh-s${round.season}`
                              } border-b-2 brdr-s${round.season} rounded-b-md`}
                            >
                              {round.scores[0].roundRank}
                              {round.scores[0].roundRank === 1
                                ? 'st'
                                : round.scores[0].roundRank === 2
                                ? 'nd'
                                : round.scores[0].roundRank === 3
                                ? 'rd'
                                : 'th'}
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }

  const selectedRoundDetails = () => {
    return (
      <div>
        <button className="px-3 py-2 border-2 rounded-md" onClick={() => setSelectedRound('')}>
          Back to Rounds
        </button>
        <div>CHECK OUT THESE DETAILS!</div>
        <div>{`Season ${(selectedRound as RoundIdentifier).season} Round ${
          (selectedRound as RoundIdentifier).round
        }`}</div>
      </div>
    )
  }

  return (
    <div className="mt-4 flex flex-col justify-center items-center">
      {!selectedRound && appearedInMenu()}
      {selectedRound && selectedRoundDetails()}
    </div>
  )
}

export default PlayerRoundResults
