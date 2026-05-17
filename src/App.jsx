import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
