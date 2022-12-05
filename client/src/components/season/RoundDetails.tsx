import { useState } from 'react'
import { SelectedRound } from './Season'
import RoundStats from './roundStats'
import RoundDetailsMenu from './RoundDetailsMenu'
import { RoundDataInterface, season7Data as S7_DATA } from '../../data/round-data/s7-round-data'
import { courseData } from '../../data/course-data/wmgt-course-data'

type Props = {
  selectedRound: SelectedRound
  setSelectedRound: React.Dispatch<React.SetStateAction<SelectedRound | ''>>
}

export type RoundDetailsMode = 'full' | 'easy' | 'hard' | 'aces' | 'coconuts'
export const modes = {
  full: 'Full Results',
  easy: 'Easy Course',
  hard: 'Hard Course',
  aces: 'Aces',
  coconuts: 'Coconuts'
}

let round: RoundDataInterface

const RoundDetails: React.FC<Props> = ({ selectedRound, setSelectedRound }) => {
  const [mode, setMode] = useState<RoundDetailsMode>('full')
  console.log(mode)

  if (selectedRound.season === 7) {
    round = S7_DATA.filter((r) => r.round === selectedRound.round)[0]
  }

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <RoundDetailsMenu
        mode={mode}
        setMode={setMode}
        round={round}
        setSelectedRound={setSelectedRound}
      />
    </div>
  )
}

export default RoundDetails
