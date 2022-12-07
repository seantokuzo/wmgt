import { useState } from 'react'
import { season7Data } from 'data/round-data/s7-round-data'
import RoundDetails from './RoundDetails'
import SeasonMenu from './SeasonMenu'

export interface SelectedRound {
  season: number
  round: number
}

const Season: React.FC = () => {
  const [selectedRound, setSelectedRound] = useState<SelectedRound | ''>({ season: 7, round: 9 })
  // const [selectedRound, setSelectedRound] = useState<SelectedRound | ''>('')

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {!selectedRound && (
        <SeasonMenu seasonData={season7Data} setSelectedRound={setSelectedRound} />
      )}
      {selectedRound && (
        <RoundDetails selectedRound={selectedRound} setSelectedRound={setSelectedRound} />
      )}
    </div>
  )
}

export default Season
