import React, { useState } from 'react'
import{Link, useNavigate} from 'react-router-dom'

const Signup = () => {
  const [name , setName]=useState("")
  const [email , setEmail]=useState("")
  const [password , setPassword]=useState("")
  const [error , setError]=useState("")
  const navigate = useNavigate()

  // const createUser = ()=>{
  //   const apiKey = "AIzaSyDJ1stYEyprRCroxIe_sYY_0Ft5yv17tWc"

  //   fetch(
  //     `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
  //   ).then((res)=>{res.json()})
  //   .then((output)=>{console.log(output)})
  //   .catch((err)=>{console.log(err)})
  // }

 

  const createUser = () => {
    const apiKey = "AIzaSyDJ1stYEyprRCroxIe_sYY_0Ft5yv17tWc";
    const formData = {
      email: email,
      password: password,
    };
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((out) => {
        if(out.error){
          setError(out.error.message) || "something went wrong"
        }else{
          navigate("/login")
        }
      })
      .catch((err) => console.log(err));
  };


  const handleSubmit = (e)=>{
    e.preventDefault()
    createUser()

  }



  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='shadow-xl w-1/5 flex justify-center  flex-col px-1 py-2 rounded-lg'>
        <h1 className='text-center mb-3 font-bold text-[28px]'>Sign Up</h1>
        <p className='text-red-500'>{error}</p>
        <form className='flex flex-col space-y-1.5' onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            onChange={(e)=>{setName(e.target.value)}}
            className='border border-orange-400 px-2 py-1 w-12/12 rounded-lg' 
            type="text" placeholder='Enter your Name'
          />
          
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
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup