import React from 'react'
import Payment from './Payment'
import Card from './Card'


function PaymentSection() {
  return (
    <div className='flex flex-row w-10/12 mx-auto py-[68px] px-5 paySection'>
      <div className='w-[67%] pr-3  payment'>
        < Payment />
      </div>

      <div className='w-[32%] card '>
        <Card />
      </div>

            <div className='text-[#1C2024] font-mono font-semibold text-[57px] leading-[64px] hidden heading'>
                <h1>Confirm & pay</h1>
            </div>

    </div>
  )
}

export default PaymentSection
