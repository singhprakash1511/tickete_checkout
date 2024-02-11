import React from 'react'
import Header from '../Components/Checkout/Header'
import Logo from "../assets/Logo.png"
import PaymentSection from '../Components/Checkout/PaymentSection'
import PaymentMode from '../Components/Checkout/PaymentMode'
import FreqQuestions from "../Components/Checkout/Questions"
import Footer from '../Components/Checkout/Footer'


const Checkout = () => {
  return (
    <div className='w-[100%]'>

      {/* Header Section */}
        <div>
            <Header Logo={Logo}/>
        </div>

        {/* Section 1 */}
          <div>
                <PaymentSection />
          </div>
        {/* Section 2 */}

      <div className='w-[71%] pr-3 '>
        <PaymentMode />
      </div>

      <div className='border w-11/12 mx-auto my-8'></div>

      {/* Section 3 */}
      <div className='w-full'>
      <FreqQuestions />
      </div>

      <div className='border w-11/12 mx-auto my-8 mb-[72px]'></div>

        {/* Footer */}
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Checkout
