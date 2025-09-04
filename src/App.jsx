
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homes from './pages/Homes'
import Agence from './pages/Agence'
import Projects from './pages/Projects'

function App() {


  return (
   <div>
    <Routes>
    <Route path='/' element={<Homes/>} />
    <Route path='/agence' element={<Agence/>} />
    <Route path='/projects' element={<Projects/>} />
    </Routes>
   </div>
  )
}

export default App
