import { useState } from 'react'
import RoundDetailBtn from './RoundDetailBtn'
import { SelectedRound } from './Season'

type Props = {
  selectedRound: SelectedRound
  setSelectedRound: React.Dispatch<React.SetStateAction<SelectedRound | ''>>
}

export type RoundDetailsMode = 'full' | 'easy' | 'hard' | 'aces' | 'coconuts'
const modes = {
  full: 'Full Results',
  easy: 'Easy Course',
  hard: 'Hard Course',
  aces: 'Aces',
  coconuts: 'Coconuts'
}

const RoundDetails: React.FC<Props> = ({ selectedRound, setSelectedRound }) => {
  const [mode, setMode] = useState<RoundDetailsMode>('full')
  console.log(mode)

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <div className="absolute top-3 left-3">
        <button
          className="p-2 text-xl
              flex justify-center hover:shadow-lg hover:scale-105
              border-2 border-[#38280e] rounded-[100%]"
          onClick={() => setSelectedRound('')}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <h1>{`Season ${selectedRound.season}`}</h1>
      <h3>{`Round ${selectedRound.round}`}</h3>
      <div className="w-full flex flex-wrap justify-evenly items-center">
        {(Object.keys(modes) as RoundDetailsMode[]).map((m) => (
          <RoundDetailBtn
            key={`mode-btn-${m}`}
            selected={mode === m}
            btnText={modes[m]}
            btnMode={m}
            updateMode={setMode}
          />
        ))}
      </div>
    </div>
  )
}

export default RoundDetails
