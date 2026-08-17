import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import ConstructionManpower from './pages/ConstructionManpower'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/construction-manpower" element={<ConstructionManpower />} />
        <Route path="/blue-collar-construction-manpower" element={<ConstructionManpower />} />
      </Routes>
    </div>
  )
}

