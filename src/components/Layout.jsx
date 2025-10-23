import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>Vivero Guillermina © {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
