
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <div>
      <div><NavBar /></div>
      
      <div><Outlet /></div>
      
    </div>

  )
}

export default App
