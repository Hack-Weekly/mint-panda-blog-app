import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewPostPage from './pages/NewPostPage'
import PostPage from './pages/PostPage'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Login from './pages/Login'
import NavigationBar from './features/NavigationBar'

export default function App() {
  return (
    <div className="app">
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/new" element={<NewPostPage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/posts/:id" element={<PostPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <NavigationBar />
    </div>
  )
}
