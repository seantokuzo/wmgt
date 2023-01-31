import { useAppContext } from 'context/appContext'
import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { darkMode } = useAppContext()
  const { pathname } = useLocation()

  const contactForm = (
    <form
      className="flex flex-col justify-center items-center"
      name="contact"
      method="POST"
      action="https://formsubmit.co/38042c1553ef5f2587e7306e98faf815"
      // action="https://formsubmit.co/ichibuho@gmail.com"
    >
      <h3 className="text-center">See any errors? Have any comments?</h3>
      <h3 className="text-center">Shoot me a message!</h3>
      <label htmlFor="name" className="mt-2 capitalize">
        name
      </label>
      <input
        className={`w-full rounded-sm text-center ${
          darkMode ? 'bg-white text-black' : 'bg-wmgYellow cl-wmgBrown'
        }`}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        max={40}
        min={1}
        name="name"
        required
      />
      <label htmlFor="email" className="mt-2 capitalize">
        email
      </label>
      <input
        className={`w-full rounded-sm text-center ${
          darkMode ? 'bg-white text-black' : 'bg-wmgYellow cl-wmgBrown'
        }`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        required
      />
      <label htmlFor="message" className="mt-2 capitalize">
        message
      </label>
      <textarea
        className={`w-full rounded-sm h-24 ${
          darkMode ? 'bg-white text-black' : 'bg-wmgYellow cl-wmgBrown'
        }`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        name="message"
        minLength={10}
        maxLength={400}
        required
      />
      <button
        type="submit"
        className="mt-4 px-6 py-3
        bg-amber-400 sh-gold brdr-gold border-2 rounded-md
        text-xl text-black font-bold uppercase
        hover:scale-110"
      >
        send message
      </button>
      <input
        type="hidden"
        name="_next"
        value="https://walkabout-mini-golf-tournament-stats.netlify.app/contact/thankyou"
      ></input>
    </form>
  )

  return (
    <div
      className="w-full max-w-lg mt-2 md:mt-8 mb-10 px-8
      flex flex-col justify-center items-center"
    >
      {pathname === '/contact' && <img src="/img/wmg_logo.png" alt="wmgt logo" />}
      {pathname === '/contact' && contactForm}
      <Outlet />
    </div>
  )
}
