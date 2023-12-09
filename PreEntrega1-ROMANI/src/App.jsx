import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/checkout/checkout'


function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path= '/' element={<ItemListContainer greeting = {"SPARTAN TACTICAL WEAR - Release your Warrior!"}/>} />
            <Route path= '/category/:categoryId' element={<ItemListContainer />} />
            <Route path= '/item/:itemId' element={<ItemDetailContainer />} />
            <Route path= '/cart' element={<Cart />} />
            <Route path= '/checkout' element={<Checkout />} />
            <Route path= '*' element={<h1>404 NOT FOUND</h1>} /> 
          </Routes>
        </CartProvider>
      </BrowserRouter>  
    </>
  )
}

export default App
