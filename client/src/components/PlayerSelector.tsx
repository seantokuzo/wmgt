import { useAppContext } from 'context/appContext'
import { allPlayersList } from 'data/player-data/AllPlayersList'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

const PlayerSelector = () => {
  const { darkMode, chooseUserPlayer, userPlayer } = useAppContext()
  const [inputValue, setInputValue] = useState(userPlayer)
  const [zoomOut, setZoomOut] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      document.body.style.webkitTransform = 'scale(1)'
      document.body.style.transform = 'scale(1)'
    }, 500)
  }, [zoomOut])

  const handleInput = (target: HTMLInputElement | { value: '' }) => {
    setInputValue(target.value)
    if (allPlayersList.findIndex((p) => p.player === target.value) < 0) return chooseUserPlayer('')
    chooseUserPlayer(target.value)
    setZoomOut(!zoomOut)
  }

  const inputStyle = darkMode
    ? 'bg-black border-white text-white'
    : 'bg-white border-black text-black'

  if (userPlayer)
    return (
      <div className="w-full flex justify-center items-center">
        <i className="fa-solid fa-delete-left opacity-0"></i>
        <div
          className="mx-3 py-1 px-4 rounded-md
        border-2 brdr-gold bg-sh-gold
        text-xxs sm:text-xs md:text-sm
        text-black font-bold"
        >
          {userPlayer}
        </div>
        <i
          className={`fa-solid fa-delete-left ${darkMode ? 'text-white' : 'text-black'}`}
          title="Clear Search"
          onClick={() => handleInput({ value: '' })}
        ></i>
      </div>
    )

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <div
          className={`w-6 h-6 p-2 text-sm
          rounded-full
          flex justify-center items-center
          ${darkMode ? 'text-black bg-white' : ''}`}
        >
          <i className="fa-solid fa-user"></i>
        </div>
        <input
          className={`w-full px-2 py-1 mx-3
          text-xxs sm:text-sm text-center
          border-2 rounded-md
          ${inputStyle}`}
          type="text"
          list="playa-playa"
          autoComplete="off"
          value={inputValue}
          onChange={(e) => handleInput(e.target as HTMLInputElement)}
        />
        <div
          className={`w-6 h-6 p-2 text-sm
          rounded-full
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
          {[...allPlayersList]
            .sort((a, b) => a.player.localeCompare(b.player))
            .map((player) => (
              <option value={player.player} key={nanoid()} />
            ))}
        </datalist>
      </div>
    </div>
  )
}

export default PlayerSelector
