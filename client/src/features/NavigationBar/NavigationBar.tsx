import { NavLink } from 'react-router-dom'
import './NavigationBar.css'
export default function Navigationbar() {
  return (
    <div className="navigation-bar">
      <NavLink to="/"><button className="shadow-small">Home</button></NavLink>
      <NavLink to="/new"><button className="shadow-small yellow">New Post</button></NavLink>
      <NavLink to="/profile"><button className="shadow-small">Profile</button></NavLink>
    </div>
  )
}