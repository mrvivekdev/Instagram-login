import { useState } from 'react'
import instagram from './assets/images-removebg-preview.png'
import facebook from './assets/facebook.png'

function App() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  
  function submitUser(){
    console.log("user: ",user);
    console.log("password: ", password);
  }

  return (
    <>
      <div className='h-full w-screen bg-black flex flex-col justify-center items-center'>
          <img className='invert w-72' src={instagram} alt="Instgram" />

          <div className='w-3/4	h-10 bg-facebook rounded-lg flex flex-row justify-center items-center mb-10'>
              <img className='h-8 invert' src={facebook} alt="facebook" />
              <h1 className='text-white font-bold ml-3 '>Continue with Facebook</h1>
          </div>

          <div className='flex flex-row justify-center items-center mb-10'>
            <div className='w-24 h-0 border border-white opacity-50'></div>
            <div className='text-white font-semibold text-center mr-3 ml-3 opacity-60'>OR</div>
            <div className='w-24 h-0  border border-white opacity-50'></div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <input type="text" onChange={(event)=>{
              setUser(event.target.value)
            }} placeholder='Phone number, username, or email' className='rounded-sm text-sm	w-72 h-11 bg-black brightness-75 border border-white mt-5 p-3 text-white' />

            <input type="password" onChange={(event)=>{
              setPassword(event.target.value)
            }} placeholder='Phone number, username, or email' className='rounded-sm text-sm	w-72 h-11 bg-black brightness-75 border border-white mt-5 p-3 text-white' />
            <h1 className='text-facebook font-medium mt-3 text-sm ml-40'>Forgot password?</h1>
          </div>

          <button onClick={submitUser} className='w-3/4 h-10 bg-facebook rounded-lg flex flex-row justify-center items-center mb-10 mt-10 text-white font-bold ml-3'>
            Log in
          </button>

          <div className='text-slate-500 font-semibold mb-10' >Don't have an account? <a className="text-facebook underline" href="https://www.instagram.com/">Sing up</a></div>
          <div className='text-slate-500 font-semibold'>By continuing, you agree to Instagram's </div>

          <div className='flex flex-row justify-center items-center text-sm mb-10'>
            <div className='text-white font-semibold text-sm' >Terms of Use</div>
            <div className='text-slate-500 font-semibold ml-2 text-sm' >and</div>
            <div className='text-white font-semibold ml-2 text-sm' >Privacy Policy</div>
          </div>
          
      </div>
    </>
  )
}

export default App
