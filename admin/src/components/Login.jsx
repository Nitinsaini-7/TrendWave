import axios from 'axios';
import React, { useState } from 'react'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';


const Login = ({setToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async(e)=>{
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl+'/api/user/admin', {email,password});

            if(response.data.success){
                setToken(response.data.token)
            } else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className=' bg-white shadow-lg rounded-lg p-4 max-w-md'>
            <h1 className='text-2xl font-bold mb-5'>Admin Pannel</h1>

            <form onSubmit={onSubmitHandler} action="">
                <div className='mb-4 min-w-72'>
                    <p className='text-sm font-medium text-gray-700'>Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full rounded-md p-2 border-gray-300 border outline-none' type="email" placeholder='Email' required />
                </div>

                <div className='mb-4 min-w-72'>
                    <p className='text-sm font-medium text-gray-700'>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full rounded-md p-2 border-gray-300 border outline-none' type="password" placeholder='Password' required />
                </div>

                <button className='bg-black text-white w-full rounded-md p-2 hover:bg-zinc-800 duration-200' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login