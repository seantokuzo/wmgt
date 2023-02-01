import { useAppContext } from 'context/appContext'

const FooterCredits = () => {
  const { windowSize } = useAppContext()
  const statGOAT = (GOAT: string) => {
    return (
      <div
        className="mx-1 px-2 py-1
        min-w-[5rem] sm:min-w-[5.5rem]
        text-xxxs sm:text-xxs
        text-black font-bold font-scorenum text-center
        bg-sh-gold border-2 brdr-gold rounded-md"
      >
        {GOAT}
      </div>
    )
  }

  if (windowSize.width < 768 && windowSize.width < windowSize.height) {
    return (
      <footer
        className={`w-full max-w-full mb-2 ${
          windowSize.height > 600 ? 'absolute bottom-3' : 'mt-10'
        } flex flex-col justify-center items-center text-xxs md:text-xs`}
      >
        <div className="">Powered with stats by</div>
        <div
          className="w-full mt-1 text-center
          mx-6 md:mx-10 lg:mx-12
          flex flex-col justify-center items-center"
        >
          <div className="flex justify-evenly items-center">
            {statGOAT('ElJorge')}
            {statGOAT('steven_T')}
            {statGOAT('FIRE_321')}
            {statGOAT('Mau')}
          </div>
          <div className="mt-2 flex justify-evenly items-center">
            {statGOAT('Bear313')}
            {statGOAT('TrippinBill')}
            {statGOAT('Crudzilla')}
            {statGOAT('ichibuho')}
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="w-full px-4 absolute bottom-3 flex justify-center items-center">
      <div
        className="text-xxs md:text-xs
        flex justify-between items-center"
      >
        {statGOAT('ElJorge')}
        {statGOAT('steven_T')}
        {statGOAT('FIRE_321')}
        {statGOAT('Mau')}
        <div className="w-max flex justify-center items-center mx-3 md:mx-6 lg:mx-8 text-center">
          <div className="">Powered with stats by</div>
        </div>
        {statGOAT('Bear313')}
        {statGOAT('TrippinBill')}
        {statGOAT('Crudzilla')}
        {statGOAT('ichibuho')}
      </div>
    </footer>
  )
}

export default FooterCredits
