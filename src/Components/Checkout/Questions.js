import React from 'react';
import About from "../../assets/About illustrations.png";
import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";

const Questions = () => {
        const [isHidden, setIsHidden] = useState(true);
        const [isHidden1, setIsHidden1] = useState(true);
        const [isHidden2, setIsHidden2] = useState(true);
        const [isHidden3, setIsHidden3] = useState(true);
        const [isHidden4, setIsHidden4] = useState(true);
        const [isRotated, setIsRotated] = useState(false);
        const [isRotated1, setIsRotated1] = useState(false);
        const [isRotated2, setIsRotated2] = useState(false);
        const [isRotated3, setIsRotated3] = useState(false);
        const [isRotated4, setIsRotated4] = useState(false);

      
        const clickHandler = () => {
          setIsHidden(!isHidden);
          setIsRotated(!isRotated);
        };

        const clickHandler1 = () => {
            setIsHidden1(!isHidden1);
            setIsRotated1(!isRotated1);
          };

          const clickHandler2 = () => {
            setIsHidden2(!isHidden2);
            setIsRotated2(!isRotated2);
          };

          const clickHandler3 = () => {
            setIsHidden3(!isHidden3);
            setIsRotated3(!isRotated3);
          };

          const clickHandler4 = () => {
            setIsHidden4(!isHidden4);
            setIsRotated4(!isRotated4);
          };

  return (
    <div className='w-10/12 mx-auto px-6 flex  gap-10 py-10 '>

      <div className='flex flex-col gap-10 w-[40%]  '>
            <div className='flex flex-col gap-2'>
                    <h3 className='text-[#1C2024] text-[24px] font-semibold leading-[32px]'>
                        Frequently asked questions
                    </h3>
                    <p className='text-[#60646C] text-[16px] font-normal leading-[24px]'>
                        Here are some of our most asked questions. 
                    </p>
            </div>

            <div className='border flex rounded-xl bg-[#F9F9FB] items-center justify-between'>
                <div className='p-5 flex flex-col gap-3'>
                    <div className='text-[#1C2024] text-[18px] font-semibold leading-[26px]'>
                    <h3>Still need help?</h3>
                    <h3>We're here for you.</h3>
                    </div>
                    <button className='mt-6 bg-black text-[#EDEEF0] px-8 py-4  text-center justify-center rounded-2xl  font-inter text-[16px] font-semibold leading-[22px]'>
                        Chat with us
                    </button>
                </div>
                <div className='pr-10'>
                    <img src={About} />
                </div>
            </div>
      </div>
      
      <div className='w-[60%] flex flex-col gap-10 '>

      <div className="border border-gray-500 p-4 flex items-start rounded-xl py-5">
      <button className={`px-4 py-2 mb-2 transition-all duration-2000 transform  ${isRotated ? "rotate-45" : "rotate-90" }`} onClick={clickHandler}>
        <IoMdAdd className='text-[24px]' />
      </button>
      <div className='flex flex-col gap-3 '>
        <h3 className='text-[#1C2024] text-[18px] font-semibold leading-[26px] pt-2'>
        What should I do on my first trip to Rome?
        </h3>

        <p className={`text-[#60646C] text-[16px] font-normal leading-[24px] ${isHidden ? 'hidden' : 'block'}`}>
        Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo     Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.
      </p>
      </div>
      
      </div>

      <div className="border border-gray-500 p-4 flex items-start rounded-xl py-5">
      <button className={`px-4 py-2 mb-2 transition-all duration-2000 transform  ${isRotated1 ? "rotate-45" : "rotate-90" }`} onClick={clickHandler1}>
        <IoMdAdd className='text-[24px]' />
      </button>
      <div className='flex flex-col gap-3 '>
        <h3 className='text-[#1C2024] text-[18px] font-semibold leading-[26px] pt-2'>
        What should I do on my first trip to Rome?
        </h3>

        <p className={`text-[#60646C] text-[16px] font-normal leading-[24px] ${isHidden1 ? 'hidden' : 'block'}`}>
        Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo     Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.
      </p>
      </div>
      
      </div>

      <div className="border border-gray-500 p-4 flex items-start rounded-xl py-5">
      <button className={`px-4 py-2 mb-2 transition-all duration-2000 transform  ${isRotated2 ? "rotate-45" : "rotate-90" }`} onClick={clickHandler2}>
        <IoMdAdd className='text-[24px]' />
      </button>
      <div className='flex flex-col gap-3 '>
        <h3 className='text-[#1C2024] text-[18px] font-semibold leading-[26px] pt-2'>
        What should I do on my first trip to Rome?
        </h3>

        <p className={`text-[#60646C] text-[16px] font-normal leading-[24px] ${isHidden2 ? 'hidden' : 'block'}`}>
        Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo     Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.
      </p>
      </div>
      
      </div>

      <div className="border border-gray-500 p-4 flex items-start rounded-xl py-5">
      <button className={`px-4 py-2 mb-2 transition-all duration-2000 transform  ${isRotated3 ? "rotate-45" : "rotate-90" }`} onClick={clickHandler3}>
        <IoMdAdd className='text-[24px]' />
      </button>
      <div className='flex flex-col gap-3 '>
        <h3 className='text-[#1C2024] text-[18px] font-semibold leading-[26px] pt-2'>
        What should I do on my first trip to Rome?
        </h3>

        <p className={`text-[#60646C] text-[16px] font-normal leading-[24px] ${isHidden3 ? 'hidden' : 'block'}`}>
        Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo     Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.
      </p>
      </div>
      
      </div>

      <div className="border border-gray-500 p-4 flex items-start rounded-xl py-5">
      <button className={`px-4 py-2 mb-2 transition-all duration-2000 transform  ${isRotated4 ? "rotate-45" : "rotate-90" }`} onClick={clickHandler4}>
        <IoMdAdd className='text-[24px]' />
      </button>
      <div className='flex flex-col gap-3 '>
        <h3 className='text-[#1C2024] text-[18px] font-semibold leading-[26px] pt-2'>
        What should I do on my first trip to Rome?
        </h3>

        <p className={`text-[#60646C] text-[16px] font-normal leading-[24px] ${isHidden4 ? 'hidden' : 'block'}`}>
        Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo     Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.
      </p>
      </div>
      
      </div>

      </div>

    </div>
  )
}

export default Questions
