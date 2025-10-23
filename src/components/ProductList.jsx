import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import productsData from '../data/products'
import { AuthContext } from '../contexts/AuthContext'


export default function ProductList({ addToCart }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setProducts(productsData)
      setError(null)
      setLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      alert('Tenés que iniciar sesión para agregar productos al carrito.')
      navigate('/login')
      return
    }
    addToCart(product)
  }

  if (loading) return <p>Cargando productos...</p>
  if (error) return <p className="error">{error}</p>

  return (
    <div className="product-list">
      {products.map(p => (
        <div key={p.id} className="product-card">
          <img src={p.image} alt={p.name} className="product-image" />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <div className="card-actions">
            <Link to={`/productos/${p.id}`} className="btn">Ver detalles</Link>
            <button className="btn" onClick={() => handleAddToCart(p)}>Agregar al carrito</button>
          </div>
        </div>
      ))}
    </div>
  )
}
