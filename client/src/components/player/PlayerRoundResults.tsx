import { useAppContext } from 'context/appContext'
import { PlayerDataGod } from 'data/playerDataGod'
import { RoundIdentifier } from 'data/round-data/roundTypes'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NoStatsForPlayer from './NoStatsForPlayer'

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

  const appearedInMenu = () => {
    return (
      <>
        <div className="border-2 brdr-gold bg-sh-gold py-3 px-4 rounded-md text-black font-bold text-center">
          <p className="underline">{userPlayer}</p>
          <p className="uppercase">Player Appeared In:</p>
        </div>
        <p className="mt-2">(Select a Round for Details)</p>
        <div className="w-full max-w-2xl mt-4 flex flex-col justify-center items-center">
          {seasonsPlayed.map((season) => {
            return (
              <div className="flex flex-col justify-center items-center" key={nanoid()}>
                <p
                  className={`mt-3 mb-2 px-10 py-2
                  text-xxs sm:text-sm md:text-base lg:text-lg font-bold font-scorenum
                  bg-sh-s${season} rounded-md`}
                >
                  {'Season ' + season}
                </p>
                <div className="max-w-xl flex flex-wrap justify-center items-center">
                  {allPlayerRounds.map((round) => {
                    if (round.season === season) {
                      return (
                        <div
                          className={`w-[8rem] mx-2 my-4 px-4 py-2
                          text-center cursor-pointer hover:scale-105 transition-all
                          brdr-s${round.season} border-2 rounded-md`}
                          onClick={() => setSelectedRound({ season, round: round.round })}
                          key={nanoid()}
                        >
                          <p>{'Round ' + round.round}</p>
                          {/* <Link
                          to={`/season/s${season}r${round.round}`}
                          className="underline text-xxs"
                          >
                          Go to Round
                        </Link> */}
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
        <div>{`Season ${selectedRound.season} Round ${selectedRound.round}`}</div>
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
