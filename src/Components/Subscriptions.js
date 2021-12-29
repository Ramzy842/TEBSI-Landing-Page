import React from 'react'
import sub from "../images/subscription.png"
const Subscriptions = () => {
    return (
        <div className='px-4 bg-gray-100 py-8 text-center'>
            <img src={sub} className='mx-auto' alt="illustration" />
            <h1 className='text-3xl font-semibold my-4'>Subscribe Karma Software</h1>
            <p className='text-xl mb-8'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <form action="" className='mb-8 sm:grid  sm:grid-cols-6 ' >
                <input type="text" className='w-full sm:col-start-1 sm:col-end-5  p-4' />
                <button className='block bg-orange-500 w-full sm:grid-cols-1 sm:col-start-5 sm:col-end-7  p-4 font-bold tracking-widest text-white'>GET STARTED</button>
            </form>
        </div>
    )
}

export default Subscriptions
