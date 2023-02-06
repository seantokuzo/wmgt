import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WhereArtThou: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section
      className="w-full mt-6 text-2xl
      text-center font-scorenum
      flex flex-col justify-center items-center"
    >
      <h1 className="">{"How'd we get over here?!"}</h1>
      <img
        src="https://c.tenor.com/2n7n23BkVM0AAAAC/happy-gilmore-get-me-outta-here.gif"
        width="480"
        height="270"
        className="w-[80%] max-w-xl my-4"
        // frameBorder="0"
        // allowFullScreen
      ></img>
      <h3 className="my-4">Get Me Outta Here</h3>
      <button
        className="w-14 h-14 p-8
        bg-wmgYellow sh-wmgYellowSm
        border-2 brdr-wmgYellow rounded-full
        text-4xl text-black
        flex justify-center items-center"
        onClick={() => navigate(-1)}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
    </section>
  )
}

export default WhereArtThou
