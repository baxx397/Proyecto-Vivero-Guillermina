import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext)
  const location = useLocation()

  if (!isAuthenticated) {
    // redirigimos a /login conservando la ruta anterior
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
