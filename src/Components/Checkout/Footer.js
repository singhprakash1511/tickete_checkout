import React from 'react'
import FooterImage from "../../assets/FooterLogo.png"

const Footer = () => {
  return (
    <div className='bg-black pt-[70px] '>
      <div className='w-10/12 mx-auto px-5 mt-14'>
        <img src={FooterImage} alt="" />
      </div>

      <div className='border border-[#7D828A] mt-[68px]'></div>

      <div className='text-white flex gap-10 w-10/12 mx-auto px-5 mt-8 py-5'>
        <h5 className='text-[#7D828A] flex gap-1'>
            Made with 
            <span className='text-red-500'>❤️</span>
        </h5>
        

        <ul className='flex gap-10 list-disc text-[#ADB1B8] '>
            <li>Privacy Policy</li>
            <li>Terms of usage</li>
            <li>Cancellation policy </li>
            <li>Sitemap</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
