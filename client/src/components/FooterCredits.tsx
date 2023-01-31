import { useAppContext } from 'context/appContext'

const FooterCredits = () => {
  const { windowSize } = useAppContext()
  const statGOAT = (GOAT: string) => {
    return (
      <div
        className="mx-1 px-4 py-1 min-w-[5rem]
        bg-sh-gold
        border-2 brdr-gold rounded-md
        text-black font-bold font-scorenum text-center"
      >
        {GOAT}
      </div>
    )
  }

  if (windowSize.width < 768 && windowSize.width < windowSize.height) {
    return (
      <footer className="w-full max-w-full absolute bottom-3 flex flex-col justify-center items-center text-xxs md:text-xs">
        <div className="">Powered with stats by</div>
        <div className=" mt-1 w-full flex flex-col justify-center items-center mx-6 md:mx-10 lg:mx-12 text-center">
          <div className="flex justify-evenly items-center">
            {statGOAT('ElJorge')}
            {statGOAT('steven_T')}
            {statGOAT('FIRE_321')}
          </div>
          <div className="mt-2 flex justify-evenly items-center">
            {statGOAT('Mau')}
            {statGOAT('Crudzilla')}
            {statGOAT('ichibuho')}
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="w-full absolute bottom-3 flex justify-center items-center">
      <div
        className="text-xxs md:text-xs
        flex justify-between items-center"
      >
        {statGOAT('ElJorge')}
        {statGOAT('steven_T')}
        {statGOAT('FIRE_321')}
        <div className="w-max flex justify-center items-center mx-6 md:mx-10 lg:mx-12 text-center">
          <div className="">Powered with stats by</div>
        </div>
        {statGOAT('Mau')}
        {statGOAT('Crudzilla')}
        {statGOAT('ichibuho')}
      </div>
    </footer>
  )
}

export default FooterCredits
