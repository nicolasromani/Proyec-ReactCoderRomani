import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemCount from './Components/ItemCount/ItemCount'
import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting = {"SPARTAN TACTICAL WEAR - Release your Warrior!"} />
      <ItemCount stock = {10} onAdd = {(count) => console.log('Cantidad agregada ',count)}/> 
      <ItemDetailContainer />
    </>
  )
}

export default App
