import React from 'react'
import { IoIosInformationCircle } from "react-icons/io";

const Payment = () => {
  return (
    <div className='w-[100%] flex flex-col gap-14 pr-10 min-w-[100%] paymentSection'>

      <div className='flex flex-col gap-10 mb-5 '>
            <div className='text-[#1C2024] font-mono font-semibold text-[57px] leading-[64px] payHeading'>
                <h1>Confirm & pay</h1>
            </div>

            <div className='bg-[#FCFCFD] flex border py-4 px-4 rounded-2xl justify-between cancellation'>
                <div className='flex flex-col'>
                    <h4 className='text-[#1C2024] font-semibold font-inter text-[14px] leading-[20px]'>Free Cancellation</h4>
                    <p className='text-[#60646C] font-[400] font-inter text-[14px] leading-[20px] .desc'>Tickets can be cancelled by 13th December, 2022.</p>
                </div>

               < div className='text-[#7E808A]'>
        <IoIosInformationCircle />
        </div>
      </div>

      </div>

      <div className='flex flex-col gap-3 pr-1'>
        <div className='mb-5 flex flex-col gap-3'>
        <h2 className='font-inter text-[#1C2024] font-semibold text-[24px] leading-[32px] formHeading'>Enter your details</h2>
        <p className='font-inter font-normal text-[#60646C] text-[16px] leading-[24px] small'>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
        </div>

        <form className='flex flex-col gap-6 text-[#B9BBC6] form'>
        <input 
            className='border px-4 py-3 rounded-2xl'
            type="text" 
            required
            placeholder='Full name '
            /> 

            <div className='w-[100%] flex gap-5 formSection'>
                    <div className='w-[50%] formSection'>
                        <select id="country" 
                                className='border px-4 mr-3 pr-5 py-3 rounded-2xl w-[100%]'
                                required
                                >
                                    <option value="">
                                        Country</option>
                                    <option value="INDIA">India</option>
                                    <option value="USA">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                        </select>
                    </div>

                    <div className='w-[50%] formSection'>
                    <input type="tel" 
                        className='border px-4 py-3 rounded-2xl w-[100%]'
                         required
                        placeholder='Phone number'/>
                    </div>
            </div>

            <div className='w-[100%] flex gap-5 formSection'>
                <div className='w-[50%] formSection'>
                        <input type="email"
                        className='border px-4 py-3 rounded-2xl w-[100%]'
                        required
                        placeholder='Email' />
                </div>

               <div className='w-[50%] formSection'>
                    <input type="email" 
                    className='border px-4 py-3 rounded-2xl w-[100%]'
                    required
                    placeholder='Confirm email'/>
               </div>
            </div>
        </form>
      </div>

        <div className='flex flex-col gap-3 pr-1'>
            <div className='mb-5 flex flex-col gap-3'>
                        <h2 className='font-inter text-[#1C2024] font-semibold text-[24px] leading-[32px] formHeading'>Additional information</h2>
                        <p className='font-inter font-normal text-[#60646C] text-[16px] leading-[24px] small'>We need a few more details to complete your reservation.</p>
            </div>
            
            <form className='flex flex-col gap-6 text-[#B9BBC6] form'>

                <div className='w-[100%] flex gap-5 formSection'>
                    
                    <input type="text" 
                    className='border px-4 py-3 rounded-2xl w-[100%]'
                    required 
                    placeholder='Input label'/>

                    <select name="select" id="select" required
                    className='border px-4 py-3 rounded-2xl w-[100%]'>
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                    </select>
                </div>

                <select name="multiselect" id="multiselect" required
                className='border px-4 py-3 rounded-2xl'>
                        <option value="">MultiSelect</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                    </select>
    
                
            </form>

            <div className='border mt-8'></div>
        </div>

    </div>
  )
}

export default Payment
