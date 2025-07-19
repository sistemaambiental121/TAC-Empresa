import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Horizon from './pages/Horizon'

function App() {
    return (
    <div
      className="app-container"
    >
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/horizon" element={<Horizon />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
