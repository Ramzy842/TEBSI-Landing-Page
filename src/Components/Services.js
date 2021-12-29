import React from 'react'
import services from '../Data/services'
import Underline from './Underline'
import SmallUnderline from "./SmallUnderline"

const Services = () => {
    return (
        <ul className=' text-white bg-blue-900 px-4 mx-0 py-8'>
          <Underline position="" />
          <h1 className='text-4xl my-8 font-semibold ' >We propose quality solutions</h1>
          {services.map(service  => {
              const {id, title, content} = service;
              return (
                <div key={id} className="service mb-4">
                    <h1 className='text-3xl'>{title}</h1>
                    <SmallUnderline />
                    <p className='text-xl'>{content}</p>
                </div>
              )
          })}
        </ul>
    )
}

export default Services
