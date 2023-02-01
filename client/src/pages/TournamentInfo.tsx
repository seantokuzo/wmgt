import { FaDiscord } from 'react-icons/fa'

const TournamentInfo = () => {
  const linkEl = (link: string, text: string) => {
    return (
      <a
        className="w-full mt-4 px-8 py-2 bg-sh-gold brdr-gold border-2 rounded-md
          text-lg font-bold text-black
          flex flex-col justify-center items-center"
        href={link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {text === 'discord' ? <FaDiscord className="text-4xl" /> : text}
      </a>
    )
  }

  return (
    <div className="w-[80%] max-w-xl px-2 flex flex-col justify-center items-center text-center">
      <div className="w-full max-w-sm flex flex-col justify-center items-center">
        <h3>To Join Check Out the Official Walkabout Mini Golf Tournament Discord Here:</h3>
        {linkEl('https://discord.gg/wmg', 'discord')}
      </div>
      <div className="w-full max-w-sm mt-4 flex flex-col justify-center items-center">
        <p>For Official Results and Cool Stats:</p>
        {linkEl(
          'https://docs.google.com/spreadsheets/d/1m6Ide8yaRJZCiSA6hQZXv3Ukh2JbbSuCH8DPgt3DPXs/edit#gid=261679476',
          'Official Results'
        )}
        {linkEl('https://apex.oracle.com/pls/apex/r/jrimblas/wmgt/home', 'Stats by ElJorge')}
        {linkEl(
          'https://docs.google.com/spreadsheets/d/178w1i4wpq5D4H6QFgib_4RGaGqOuYN6xJYwjikYdUf0/edit#gid=1780620131',
          'Stats by steven_T'
        )}
      </div>
    </div>
  )
}

export default TournamentInfo
