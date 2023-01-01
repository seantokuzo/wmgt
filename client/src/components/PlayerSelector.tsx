import { useAppContext } from 'context/appContext'
import { allPlayersList } from 'data/player-data/AllPlayersList'
import { nanoid } from 'nanoid'
import { useState } from 'react'

const PlayerSelector = () => {
  const { darkMode, chooseUserPlayer, userPlayer } = useAppContext()
  const [inputValue, setInputValue] = useState(userPlayer)

  const handleInput = (target: HTMLInputElement | { value: '' }) => {
    setInputValue(target.value)
    if (!target.value) return chooseUserPlayer('')
    if (allPlayersList.findIndex((p) => p.player === target.value) < 0) return
    chooseUserPlayer(target.value)
  }

  const inputStyle = darkMode
    ? 'bg-black border-white text-white'
    : 'bg-white border-black text-black'

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">Who art thou?</div>
      <div className="mt-2 flex justify-center items-center">
        <div className="w-8 h-8 opacity-0"></div>
        <input
          className={`border-2 rounded-md px-2 py-1 mx-3 ${inputStyle} text-center`}
          type="text"
          list="playa-playa"
          autoComplete="off"
          value={inputValue}
          onChange={(e) => handleInput(e.target as HTMLInputElement)}
        />
        <div
          className={`w-8 h-8 rounded-full text-xl
          flex justify-center items-center
          ${darkMode ? 'text-black bg-white' : ''}`}
          title={inputValue.length > 0 ? 'Clear Search' : undefined}
          onClick={() => handleInput({ value: '' })}
        >
          <i
            className={`fa-solid ${
              inputValue.length > 0 ? 'fa-delete-left' : 'fa-magnifying-glass'
            }`}
          ></i>
        </div>
        <datalist id="playa-playa">
          {allPlayersList.map((player) => (
            <option value={player.player} key={nanoid()} />
          ))}
        </datalist>
      </div>
    </div>
  )
}

export default PlayerSelector
