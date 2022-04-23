import React from 'react'
import trustedBy from '../Data/trustedBy'

const TrustedBySection = () => {
    return (
        <div className='h-1/2 px-2 py-2 my-4 md:px-2 md:py-12'>
            <h1 className='text-2xl my-8 font-semibold w-full text-center'>Trusted by 2500+ clients around the world</h1>
            <ul className='grid grid-cols-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
                {trustedBy.map(company => {
                    const {id, image} = company;
                    return <li key={id} className='p-4 opacity-40 hover:opacity-100 cursor-pointer mx-auto'><img src={image} alt={id} /></li>
                })}
            </ul>
        </div>
    )
}

export default TrustedBySection
