import React from 'react';
import creditCard from "../../assets/CreditCard.png";
import masCard from "../../assets/mastercard.png";
import visaCard from "../../assets/visa.png";
import club from "../../assets/diners-club.png";
import { FaLock } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import iPay from "../../assets/ipay.png";
import gPay from "../../assets/gpay.png";



const PaymentMode = () => {
  return (
    <div className='w-10/12 mx-auto px-16 flex flex-col gap-10 mode'>
      
      <div className='modeSec'>
        <h3 className='font-semibold text-[24x] leading-[32px] text-[#1C2024] formHeading'>
        Select your mode of payment
        </h3>

        <p className='font-normal text-[16px] leading-[24px] text-[#60646C] small'>Payments with Tickete are secure and encrypted.</p>
      </div>

      <div className='border p-6 gap-8 flex flex-col rounded-xl border-black'>

        <div className='flex items-center justify-between gap-2'>
            <div className='flex gap-3'>
            <img src={creditCard} alt='image' className='border px-[5px] py-[1px] rounded-[3px]'/>
            <h3 className='font-semibold font-inter text-[16x] leading-[22px] text-[#1C2024]'>
            Credit & debit card
            </h3>
            </div>
            <input type="radio" name="options"/>
        </div>

        <div className='flex gap-1'>
                <img src={visaCard} alt='image'/>
                <img src={masCard} alt='image' />
                <img src={club} alt='image'/>
        </div>

        <form className='flex flex-col gap-6 form'>
            <div className='flex gap-8 formSection'>
                <input type="text" 
                required
                className='border px-4 py-3 rounded-2xl w-[100%]'
                placeholder='Name on card'/>

                <input type="text" 
                required
                className='border px-4 py-3 rounded-2xl w-[100%]'
                placeholder='Card Number'/>
            </div>

            <div className='flex gap-8 formSection'>
            <input type="text" 
                required
                className='border px-4 py-3 rounded-2xl w-[100%]'
                placeholder='Expire Date'/>

                <input type="text" 
                className='border px-4 py-3 rounded-2xl w-[100%]'
                required
                placeholder={`<CVV/CVC>`}/>
            </div>
        </form>

        <div className='border formSection'></div>

            <div>
                        <div className='flex px-5 flex-col gap-1'>
                                <div className='text-[#1C2024] font-inter text-[18px] font-semibold leading-[26px] flex items-center justify-between'>
                                    <h2>Total payable:$xxx</h2>
                                    <span className='text-white bg-[#299764] w-[120px] py-[4px] px-[6px] rounded-xl font-inter text-[12px] font-semibold leading-[18px]'>
                                    {`You saved <price>`}
                                </span>
                                </div>
                                
                        </div>

                    <p className='font-inter text-[12px] font-normal leading-[20px] text-[#60646C] flex items-center underline underline-offset-1 pl-5 mt-3 gap-1'>
                    You will be charged in Aed 
                    <IoIosInformationCircle />
                    </p>
                    

            </div>

            <div className='px-5 font-inter text-[12px] font-normal leading-[20px]'>
                <p>By clicking “confirm & pay”, you agree to <span className='text-blue-400 underline'> Tickete’s general terms and conditions</span>  and <span  className='text-blue-400 underline'>cancellation policy</span>.</p>

                <button className='mt-6 flex  items-center gap-1 bg-black text-[#EDEEF0] px-8 py-4  text-center justify-center rounded-2xl  font-inter text-[18px] font-semibold leading-[24px]'> 
                <FaLock />
                    Confirm & pay</button>
            </div>

      </div>

      <div className='flex items-center justify-between border px-3 py-5 rounded-xl bg-[#d3d4db31]'>
        <div className='flex gap-2'>
            <img src={iPay}  alt='image'/>
            <h3>Coming soon</h3>
        </div>
        <input type="radio" name="options" placeholder='Coming soon'/>
      </div>

      <div className='flex items-center justify-between border px-3 py-5 rounded-xl bg-[#d3d4db31]'>
        <div className='flex gap-2'>
            <img src={gPay}  alt='image' />
            <h3>Coming soon</h3>
        </div>
        <input type="radio" name="options" placeholder='Coming soon'/>
      </div>

    </div>
  )
}

export default PaymentMode
