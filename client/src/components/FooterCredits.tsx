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
    <div className="w-full absolute bottom-0 flex justify-center items-center">
      <div
        className="w-4/5 max-w-md py-2
        text-xxs
        flex justify-between items-center"
      >
        {statGOAT('Crudzilla')}
        <div className="flex justify-center items-center mx-2">
          <i className="fa-solid fa-arrow-left"></i>
          <div className="w-max mx-3 text-center">
            {windowSize.width < 768 ? (
              <>
                {' '}
                <div className="">Powered with</div>
                <div className="">stats by</div>
              </>
            ) : (
              <div className="">Powered with stats by</div>
            )}
          </div>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        {statGOAT('steven_T')}
      </div>
    </div>
  )
}

export default FooterCredits
