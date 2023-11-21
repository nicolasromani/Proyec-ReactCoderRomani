import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path= '/' element={<ItemListContainer greeting = {"SPARTAN TACTICAL WEAR - Release your Warrior!"}/>} />
          <Route path= '/category/:categoryId' element={<ItemListContainer />} />
          <Route path= '/item/:itemId' element={<ItemDetailContainer />} />
          <Route path= '*' element={<h1>404 NOT FOUND</h1>} /> 
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
