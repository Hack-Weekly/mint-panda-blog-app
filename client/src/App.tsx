import './App.css'
import { Route, Routes } from 'react-router-dom'
import { NavigationBar } from './features'
import { HomePage, Login, NewPostPage, NotFound, PostPage, Profile } from './pages'

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
