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
          peer-checked:after:bg-black peer-checked:after:border-black
          after:bg-wmgYellow after:border-wmgYellow
          bg-black peer-checked:bg-wmgYellow
          peer-checked:border-wmgYellow
          after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:rounded-full after:h-5 after:w-5 after:transition-all
          peer-checked:border-2 peer-focus:outline-none peer peer-checked:after:translate-x-full"
      ></div>
    </label>
  )
}

export default ThemeToggler

// #f8ff71
// #38280e
