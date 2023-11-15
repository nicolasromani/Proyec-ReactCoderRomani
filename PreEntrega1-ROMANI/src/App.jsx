import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemCount from './Components/ItemCount/ItemCount'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting = {"La tienda para los amantes de las actividades Outdoor"} />
      <ItemCount stock = {10} onAdd = {(count) => console.log('Cantidad agregada ',count)}/> 
    </>
  )
}

export default App
