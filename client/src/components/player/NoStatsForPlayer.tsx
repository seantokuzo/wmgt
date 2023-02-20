const NoStatsForPlayer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="https://c.tenor.com/2n7n23BkVM0AAAAC/happy-gilmore-get-me-outta-here.gif"
        width="480"
        height="270"
        className="w-[80%] max-w-xl my-4"
        // frameBorder="0"
        // allowFullScreen
      ></img>
      <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold ">
        No Stats for this Player
      </div>
      {/* <div className="">To Start Accumulating Stats Sign Up for the Tournament Here:</div> */}
    </div>
  )
}

export default NoStatsForPlayer
