import { useAppContext } from 'context/appContext'

const FooterCredits = () => {
  const { windowSize } = useAppContext()
  const statGOAT = (GOAT: string) => {
    return (
      <div
        className="px-4 py-1
        bg-sh-gold
        border-2 brdr-gold rounded-md
        text-black font-bold font-scorenum"
      >
        {GOAT}
      </div>
    )
  }

  return (
    <footer className="w-full absolute bottom-3 flex justify-center items-center">
      <div
        className="text-xxs md:text-xs
        flex justify-between items-center"
      >
        {statGOAT('Crudzilla')}
        <div className="w-max flex justify-center items-center mx-6 md:mx-10 lg:mx-12 text-center">
          {windowSize.width < 768 ? (
            <div className="flex flex-col">
              <div className="">Powered with</div>
              <div className="">stats by</div>
            </div>
          ) : (
            <div className="">Powered with stats by</div>
          )}
        </div>
        {statGOAT('steven_T')}
      </div>
    </footer>
  )
}

export default FooterCredits
