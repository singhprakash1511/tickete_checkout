import React from 'react';
import { MdLockOutline } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import "../../App"



const Header = ({Logo}) => {
  return (
    <div className='flex flex-col'>
      
        <div className='flex justify-between p-5 w-10/12 mx-auto'>
        <div className='font-bold text-[40px]'>
            <img src={Logo} alt='image' className='logo'/>
            <IoMdArrowBack className='hidden arrow'/>
        </div>

        <div className='flex items-center text-gray-500 font-semibold gap-1 checkout'>
            <MdLockOutline />
            Checkout
        </div>

        <div className='flex items-center text-gray-800 font-medium gap-1'>
            <IoIosHelpCircleOutline className='helpIcon'/>
            <span className='help'>Help</span>
        </div>
        </div>

        <div className='w-[100%] bg-black text-white p-2 flex items-center justify-center'>
            Holding your tickets for 30:00
        </div>
    </div>
  )
}

export default Header
