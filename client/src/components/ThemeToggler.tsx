import { useAppContext } from 'context/appContext'

const ThemeToggler: React.FC = () => {
  const { darkMode, toggleDarkMode } = useAppContext()

  return (
    <label
      htmlFor="default-toggle"
      className="inline-flex relative items-center cursor-pointer self-end"
    >
      <input
        type="checkbox"
        onChange={toggleDarkMode}
        checked={darkMode}
        value=""
        id="default-toggle"
        className="sr-only peer"
      />
      <div
        className="w-11 h-6 rounded-full
        bg-black border-black border-2 after:bg-white
        peer-checked:after:bg-black peer-checked:after:border-black
        after:bg-wmgYellow after:brdr-wmgYellow
        after:content-[''] after:absolute after:top-[2px] after:left-[2px]
        after:rounded-full after:h-5 after:w-5 after:transition-all
        peer-checked:border-2 peer-checked:border-[#f8ff71]
        peer-checked:bg-[#f8ff71]
        peer-checked:after:translate-x-full
        peer-focus:outline-none peer"
      ></div>
    </label>
  )
}

export default ThemeToggler

// #f8ff71
// #38280e
