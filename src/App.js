import './App.css'
import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Receipt from './components/Receipt';



function App() {

  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [addCart, setAddCart] = useState([])
  const [prices, setPrices] = useState([])

  useEffect(() => {
      const fetchProducts = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${category}`)
        const data = await res.json()
        setProducts(data)
        setIsLoading(false)
      }
    fetchProducts()
  }, [category])

  const settingCategory = (text) => {
    setCategory(text)
  }

  const addToCart = (product) => {
    setAddCart([...addCart, product.products])
    setPrices([...prices, product.products.price])
  }

  const clearCart = () => {
    setAddCart([])
    setPrices([])
  }

  const deleteCartItem = (id) => {
    setAddCart(
      addCart.filter(product => id !== product.id)
    )
  }

  const deletePrice = (id) => {
    setPrices(
      prices.filter(price => id !== price)
    )
  }

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home products={products} settingCategory={settingCategory} isLoading={isLoading} addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart addCart={addCart} prices={prices} clearCart={clearCart} deleteCartItem={deleteCartItem} deletePrice={deletePrice} />} />
        <Route path='/receipt' element={<Receipt/>} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
