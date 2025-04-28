import './App.css'
import Navbar from './Components/Common/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from "../src/Pages/Home"
import Menu from "../src/Pages/menu"
import About from "../src/Pages/about"
import Contact from "../src/Pages/contact"
// import Login from "../src/Pages/login"
// import Login from '../src/Pages/login'
import Cart from "../src/Pages/Cart"
import Signup from './Pages/Signup'
import Footer from './Components/Common/Footer'
import Login from './Pages/Login'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
