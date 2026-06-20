import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      {/* Navbar is outside Routes so it shows on every page */}
      <Navbar />
      
      <main style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          {/* The * catches all undefined routes for the 404 page */}
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </main>
    </>
  )
}

export default App