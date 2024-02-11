import React from 'react'
import Payment from './Payment'
import Card from './Card'


function PaymentSection() {
  return (
    <div className='flex flex-row w-10/12 mx-auto py-[68px] px-5 paySection'>
      <div className='w-[67%] pr-3 pay'>
        < Payment />
      </div>

      <div className='w-[32%] card '>
        <Card />
      </div>
    </div>
  )
}

export default PaymentSection
