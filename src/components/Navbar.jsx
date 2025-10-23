import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export default function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext)

  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">Vivero Guillermina</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        {!isAuthenticated ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <li><button className="link-button" onClick={logout}>Cerrar sesión</button></li>
        )}
      </ul>
    </nav>
  )
}
