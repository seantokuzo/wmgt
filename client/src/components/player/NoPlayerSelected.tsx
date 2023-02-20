const NoPlayerSelected = () => {
  return (
    <div className="py-8 flex flex-col justify-center items-center">
      <div
        className="w-40 h-40 animate-loadspin
          border-4 border-white/[0.65] border-t-green-500 rounded-[50%]
          flex flex-col justify-center items-center"
      >
        <img src="/img/the_dude.png" alt="The Dude" className="animate-revspin w-3/4 mb-1" />
      </div>
      <div className="text-sm sm:text-base md:text-lg lg:text-xl">WHO ARE YOU?</div>
      <div className="text-sm sm:text-base md:text-lg lg:text-xl">SELECT A PLAYER FOR STATS</div>
    </div>
  )
}

export default NoPlayerSelected
