import { NavLink } from 'react-router-dom'
import './NavigationBar.css'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { FiHome } from 'react-icons/fi'
import { BsPersonCircle } from 'react-icons/bs'

export default function Navigationbar() {
  return (
    <div className="navigation-bar">
      <NavLink to="/">
        <button className="shadow-small">
          <FiHome/>
        </button>
      </NavLink>
      <NavLink to="/new">
        <button className="shadow-small yellow">
          <IoMdAddCircleOutline/>
        </button>
      </NavLink>
      <NavLink to="/profile">
        <button className="shadow-small">
          <BsPersonCircle/>
        </button>
      </NavLink>
    </div>
  )
}