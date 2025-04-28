import React from 'react'
import { NavLink , Link, useNavigate } from 'react-router-dom'
// import {Clock} from 'lucide-react'

const Navbar = () => {

  const navigate = useNavigate()
  const storedData = localStorage.getItem("idToken")

  const handleLogout=()=>{
    localStorage.removeItem("idToken")
    window.location.reload()
    navigate("/Signup")
  }

  return (
    <div className='shadow-md p-4'>
        <nav className='flex justify-around container mx-auto items-center'>
            <div className='font-bold text-orange-500 text-2xl'>Twiggy</div>
            <div className='w-1/3 flex justify-around text-[18px] '>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className='flex justify-evenly w-1/5 gap-3'>
              {storedData? <button onClick={handleLogout} className='border border-orange-400 px-6 py-2 rounded-lg text-orange-500'>Logout</button>:(
                <>
                  <Link className='border border-orange-400 px-6 py-2 rounded-lg text-orange-500' to="/login">Login</Link>
                  <Link  className='border border-orange-400 px-5 py-2 rounded-lg bg-orange-400 text-white' to="/signup">Signup</Link>
                </>
              )}

                <Link  className='border border-orange-400 px-4 py-2 rounded-lg text-orange-500' to="/cart">Cart</Link>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar