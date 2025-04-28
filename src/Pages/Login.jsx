import React, { useState } from 'react'
import{Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const [email , setEmail]= useState("")
  const [password , setPassword]= useState("")
  const [err , setErr]=useState("")

  const Navigate = useNavigate()



  const loginUser = () => {
    const apiKey = "AIzaSyDJ1stYEyprRCroxIe_sYY_0Ft5yv17tWc";
    const formData = {
      email: email,
      password: password,
    };
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((out) => {
        if(out.error){
          setErr(out.error.message || "something went wrong")
        }else{
          localStorage.setItem("idToken" , out.idToken)
          Navigate("/")
          window.location.reload()
        }
      })
      .catch((err) => 
        console.log(err.message)
        // setErr(err.message)
      );
  };



  const handleLogin = (e)=>{
    e.preventDefault()
    console.log(email , password)
    loginUser()
  }


  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='shadow-xl w-1/5 flex justify-center  flex-col px-1 py-2 rounded-lg'>
        <h1 className='text-center mb-3 font-bold text-[28px]'>Log In</h1>
        <p className='text-red-400'>{err}</p>
        <form className='flex flex-col space-y-1.5' onSubmit={handleLogin}>
          
          <label>Email</label>
          <input
           onChange={(e)=>{setEmail(e.target.value)}} 
           className='border border-orange-400 px-2 py-1 w-12/12 rounded-lg' 
           type="text" placeholder='Enter your Email'
          />

          <label>Password</label>
          <input
           onChange={(e)=>{setPassword(e.target.value)}} 
           className='border border-orange-400 px-2 py-1 w-12/12 rounded-lg' 
           type="text" placeholder='Enter your Password'
          />
          
          <button className='border border-orange-400 px-2 py-1 w-12/12 rounded-lg bg-orange-500 text-white'>Submit</button>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-orange-500">
              Sign Up
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login