import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Comparison from './pages/Comparison'
import Product from './pages/Product'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/product" element={<Product />} />
      </Routes>    
    </>
  )
}

export default App
