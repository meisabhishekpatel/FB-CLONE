import React from 'react'
import { signIn } from 'next-auth/react'

function Login() {
  return (
    <div className='grid place-items-center'>
        <img 
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
         />
         <h1 onClick={() => signIn()} className='p-5 bg-blue-500 rounded-full 
         text-white text-center cursor-pointer'>
         Login With facebook
         </h1>
    </div>
  )
}

export default Login