import Loading from 'components/Loading'
import { Link } from 'react-router-dom'

export default function ContactThankYou() {
  return (
    <div className="flex flex-col justify-center items-center text-center text-xl">
      <p className="">Thanks for reaching out!</p>
      <p className="mt-4">I will get back to you shortly</p>
      <Loading />
      <Link to="/" className='mt-8 px-6 py-2 bg-sh-gold border-2 brdr-gold rounded-md hover:scale-110 font-bold text-black'>Back to Main Menu</Link>
    </div>
  )
}
