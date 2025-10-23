import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import productsData from '../data/products'
import { AuthContext } from '../contexts/AuthContext'



export default function ProductDetail({ addToCart }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(AuthContext)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      const found = productsData.find(p => p.id === Number(id))
      if (!found) {
        setError('Producto no encontrado.')
        setProduct(null)
      } else {
        setProduct(found)
        setError(null)
      }
      setLoading(false)
    }, 400)

    return () => clearTimeout(timer)
  }, [id])

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert('Tenés que iniciar sesión para agregar productos al carrito.')
      navigate('/login')
      return
    }
    addToCart(product)
  }

  if (loading) return <p>Cargando detalle...</p>
  if (error) return (
    <div className="product-detail">
      <p>{error}</p>
      <Link to="/productos" className="btn back-btn">← Volver a productos</Link>
    </div>
  )

  return (
    <div className="product-detail">
      <Link to="/productos" className="btn back-btn">← Volver</Link>
      <img src={product.image} alt={product.name} className="detail-image" />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Precio:</strong> ${product.price}</p>
        {product.luz && <p><strong>Luz:</strong> {product.luz}</p>}
        {product.riego && <p><strong>Riego:</strong> {product.riego}</p>}
        {product.cuidados && <p><strong>Cuidados:</strong> {product.cuidados}</p>}
        {product.tamaño && <p><strong>Tamaño:</strong> {product.tamaño}</p>}
        <button className="btn add-cart" onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  )
}
