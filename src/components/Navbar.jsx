import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-50 px-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">Alex's Island</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to ="/about" className={({ isActive }) => isActive ? "text-[#439cfb]" : "text-[#70798c]"}> About</NavLink>
        <NavLink to ="/projects" className={({ isActive }) => isActive ? "text-[#439cfb]" : "text-[#70798c]"}> Projects</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
