import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import Title from '../components/Title';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const {token, setToken, navigate, backendUrl} = useContext(ShopContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      
      if(currentState === 'Sign Up'){
        const response = await axios.post(backendUrl+'/api/user/register', {name, email, password})
        
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success("signup successfuly")

        }else{
          toast.error(response.data.message)
        }
        
      }else{
        const response = await axios.post(backendUrl+'/api/user/login', {email, password})
        
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success("login successfuly")

        }else{
          toast.error(response.data.message)
        }
        
      }

    } catch (error) {
      
      // console.log(error)
      toast.error(error.message)

    }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className=' py-5  flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-5 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <Title text1={currentState}/>
      </div>

      {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} name='name' value={name} required type="text" className='w-full  px-3 p-2 rounded-full border-gray-700 outline-none ring-1 focus:ring-cyan-500 ring-black' placeholder='Name' />}
      <input onChange={(e)=>setEmail(e.target.value)} name='email' value={email} required type="email" className='w-full px-3 p-2  border-gray-700 outline-none rounded-full ring-1 focus:ring-cyan-500 ring-black' placeholder='Email' />
      <input onChange={(e)=>setPassword(e.target.value)} name='password' value={password} required type="password" className='w-full px-3 p-2 rounded-full border-gray-700 outline-none ring-1 focus:ring-cyan-500 ring-black' placeholder='Password' />

      <div className='w-full flex justify-between text-sm -mt-2'>
        <p className='cursor-pointer'>Forgot Password ?</p>
        {
          currentState === 'Login'
          ? <p className='cursor-pointer' onClick={()=>setCurrentState('Sign Up')}>Create Account</p>
          : <p className='cursor-pointer' onClick={()=>setCurrentState('Login')}>Login Account</p>
        }
      </div>
      <button className='text-white bg-black font-light rounded-full w-full px-8 p-2 mt-5'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login