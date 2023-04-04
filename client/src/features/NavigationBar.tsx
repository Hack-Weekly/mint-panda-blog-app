import { NavLink } from 'react-router-dom'

export default function Navigationbar() {
  return (
    <div className="navigation-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/new">New Post</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  )
}