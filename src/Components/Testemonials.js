import React from 'react'
import Underline from './Underline'
import testemonial from "../images/testemonial.jpg"
import { BsArrowRight } from "react-icons/bs"
const Testemonials = () => {
    return (
        <div className=' px-4 mt-8'>
            <Underline position="mx-auto mb-8" />
            <p className='text-center text-3xl font-bold'>"It is really refreshing to work with Deva which is truly helpful in the client’s needs. Since using this software, I feel confident in managing our marketing."</p>
            <h3 className=' text-center text-xl font-semibold mt-4'>— Jack Calderon</h3>
            <h4 className=' text-center text-xl  mt-2'>Head of marketing, Apple Inc.</h4>
            <div className='mt-6  '>
                <img className='w-56 sm:w-72 sm:h-72 h-56 mx-auto' src={testemonial} alt="a person" />
                <div className=' relative bottom-52 sm:bottom-64 sm:w-72 sm:h-72 left-4 w-56 h-56 -z-10 bg-orange-500 mx-auto'></div>
            </div>
            <div className=' text-white bg-blue-900 -mt-36 px-4 py-8'>
                <Underline position="" />
                <h1 className='text-left text-3xl my-8 font-semibold ' >Automate your marketing tasks and gain more clients for your business</h1>
                <p className='text-left text-xl'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>

                <button className=' bg-orange-500 mt-4 z-20 p-4 w-40 tracking-wide text-white font-bold'>TRY FOR FREE</button>
                <button className='mt-8 mb-4 block  w-44 text-left text-lg hover:text-gray-500 text-left font-semibold text-white'>Request a demo <BsArrowRight className='inline-block' /> </button>


            </div>
        </div>
    )
}

export default Testemonials
