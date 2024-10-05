import React from 'react'
import Container from './Container'
import logo from '../../../public/logo.png'

const Navbar = () => {
  return (
    <div className='py-4 bg-[#1C1E53]  border border-[#802424] '>
       <Container className='flex justify-between items-center' >
        <img src={logo} alt="logo" />
        <div className='flex gap-10 items-center'>
        <ul className='flex gap-8'>
            <li className='text-white font-medium leading-6'>Home</li>
            <li className='text-white font-medium leading-6'>About us</li>
            <li className='text-white font-medium leading-6'>Features</li>
            <li className='text-white font-medium leading-6'>Pricing</li>
            <li className='text-white font-medium leading-6'>FAQ</li>
            <li className='text-white font-medium leading-6'>Blog</li>
        </ul>
        <button className='text-white font-medium leading-6 py-4 px-12 border-2 border-[#F4F6FC] rounded-[40px]'>Contact us</button>
        </div>
       
       </Container>
        </div>
  )
}

export default Navbar