import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Admin from './components/Admin'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

export default function App() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id)
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)
      } else {
        return [...prev, { ...product, quantity: 1 }]
      }
    })
  }

  // Componente Home simplificado sin botón
  function Home() {
    return (
      <div className="home-container">
        <div className="home-banner">
          <div className="overlay">
            <h1>Bienvenido a Vivero Guillermina</h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductList addToCart={addToCart} />} />
          <Route path="/productos/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/login" element={<Login />} />

          <Route path="/carrito" element={
            <ProtectedRoute>
              <Cart cart={cart} setCart={setCart} />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />

          <Route path="*" element={<p>404 - No encontrado</p>} />
        </Routes>
      </Layout>
    </AuthProvider>
  )
}
