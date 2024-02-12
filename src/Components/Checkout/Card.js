import React from 'react'
import { IoIosArrowForward, IoIosArrowBack, IoMdAdd } from "react-icons/io";
import { PiTicketFill } from "react-icons/pi";
import { FaCalendar,  FaUserFriends, FaLock } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import image from "../../assets/image.jpg"
import { IoIosTrophy } from "react-icons/io";


const Card = () => {
  return (
    <div className='relative flex flex-col border py-5  rounded-3xl gap-3 card'>
        
        <div className='relative flex items-center justify-center'>

            <div className='absolute bg-white top-4 left-8 py-[3px] rounded-sm px-[4px] flex items-center font-inter text-[12px] font-semibold leading-4 gap-1 bestseller'>
                <IoIosTrophy />
                BeatSeller</div>

            <div className='absolute top-[90px]  bg-white left-8 rounded-full p-2 '>
                <IoIosArrowBack className='cardIcon'/>
            </div>

            <div  className='absolute top-[90px]  bg-white right-8 rounded-full p-2'>
                <IoIosArrowForward className='cardIcon'/>
            </div>

            <div>
                <img src={image} alt='image' className=' w-[352px] h-[198px] rounded-3xl image'/>
            </div>
        </div>

        <div className='px-6 description'>
            <p className='font-inter text-[14px] font-semibold leading-5 text-[#60646C]'>{`4.9(4.5k) <category>`} </p>
            <p className='text-[#1C2024] font-semibold font-inter text-[16px] leading-[22px]'>Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</p>
        </div>

        <div className='flex flex-col gap-3 mt-4 pl-6 description'>

            <div className='flex flex-row'>
                <h2 className='flex items-center gap-2 font-inter text-[14px] font-semibold leading-[20px] text-[#1C2024]'>
                <PiTicketFill />
                {`<ticket type - variant>`}
                </h2>
            </div>

            <div className='flex items-start gap-2'>
                <FaCalendar />
                <div className='flex flex-col gap-2'>
                        <h3 className='font-inter text-[14px] font-semibold leading-[20px] text-[#1C2024]'>
                            {`<day>, <month> <date>`}
                        </h3>
                        <p className='font-inter text-[12px] font-normal leading-[18px] text-[#60646C]'>
                            {`Duration: <duration>`}
                        </p>
                </div>
            </div>

            <div className='flex flex-col gap-2 text-[#1C2024] '>
                
                <h3 className='font-inter text-[14px] font-semibold leading-[20px] text-[#1C2024] flex gap-2 items-center'>
                <FaClock />
                    {`<time>`}
                </h3>
                <p className='font-inter text-[12px] font-normal leading-[18px] pl-6 text-[#60646C]'>
                    {`Operating hours: <time> to <time>`}
                </p>
            </div>

            <div className='flex items-center gap-2'>
                <FaUserFriends />
                <h3 className='font-inter text-[14px] font-semibold leading-[20px]'>
                    5 guests
                </h3>
            </div>

            <div className='border border-dotted my-3 mr-5'></div>

        </div>

        <div className='text-[#60646C] font-inter text-[14px] font-semibold leading-[20px] flex items-center justify-between px-4 pl-6 description'>
            <p className='underline'>View payment summary</p>
            <IoMdAdd />
        </div>

        <div className='border my-3 w-full '></div>

        <div>
                    <div className='flex px-5 flex-col gap-1 subHeading'>
                            <div className='text-[#1C2024] font-inter text-[18px] font-semibold leading-[26px] flex items-center justify-between'>
                                <h2>Total payable</h2>

                                <p>$xxx</p>
                            </div>
                            <span className='text-[#299764] bg-green-100 w-[120px] pl-[6px] px-[5px] rounded-xl font-inter text-[12px] font-semibold leading-[18px]'>
                                {`You saved <price>`}
                            </span>
                    </div>

                <p className='font-inter text-[12px] font-semibold leading-[18px] text-[#60646C] flex items-center underline underline-offset-1 pl-5 mt-3 gap-1 desc'>
                You will be charged in Aed 
                <IoIosInformationCircle />
                </p>
                

        </div>

        <div className='px-5 font-inter text-[12px] font-normal leading-[20px] lost'>
            <p>By clicking “confirm & pay”, you agree to <span className='text-blue-400 underline'> Tickete’s general terms and conditions</span>  and <span  className='text-blue-400 underline'>cancellation policy</span>.</p>

            <button className='my-3 flex  items-center gap-1 bg-black text-[#EDEEF0] py-4 w-full text-center justify-center rounded-2xl  font-inter text-[18px] font-semibold leading-[24px]'> 
            <FaLock />
                Confirm & pay</button>
        </div>
    </div>
  )
}

export default Card
