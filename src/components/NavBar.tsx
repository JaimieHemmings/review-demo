import { NavLink } from "react-router-dom"
import {FaQuestion} from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav aria-label="Main navigation" className="flex flex-row justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
      <ul className="flex flex-col justify-between">
        <li className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center justify-between">
            <svg className="inline-block" width="40" height="40" viewBox="0 0 46 55" fill="#3b444b" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.6 5.70001V27.2L17.7 24.4C9 19.4 3.59999 10.1 3.59999 0H0V24.6C0 32.6 4.59999 40 11.9 43.5L22.7 48.7V27.2L27.6 30C36.3 35 41.7 44.3 41.7 54.4H45.3V29.8C45.3 21.8 40.7 14.4 33.4 10.9L22.6 5.70001Z" fill="#3b444b"/>
            </svg>
            <span className="text-2xl px-3 font-bold text-[#3b444b] inline-block">
              Feedback UI
            </span>
          </NavLink>
        </li>
      </ul>
      <ul className="nav">
        <li className="font-bold text-slate-600 uppercase opacity-1 hover:opacity-80 transition-all">
          <NavLink to="/about" className={({ isActive }) =>
              isActive ? "text-pink-600" : "text-slate-600"
          }>
            <FaQuestion size={30} />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
