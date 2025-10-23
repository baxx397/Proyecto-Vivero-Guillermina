import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export default function Login() {
  const { login, isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = () => {
    login()
    navigate(from, { replace: true })
  }

  return (
    <div>
      {isAuthenticated ? (
        <p>You are already logged in.</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  )
}
