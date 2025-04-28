import React from 'react'

const Banner = () => {
  return (
    <div className='flex container mx-auto justify-evenly mt-10 items-center'>
        <div className='p-2'>
            <div className='text-[60px] font-bold'>Delicious Food,</div>
            <div className='text-[60px] font-bold text-orange-500'>Delivered Fast</div>
            <p>Experience the best local restaurants at your doorstep. Fresh , quick , and reliable delivery.</p>
            <div className='mt-7 '>
                <button className='border border-orange-500 px-6 py-3 rounded-lg '>Order Now</button>
                <button className='border border-orange-500 px-6 py-3 rounded-lg bg-orange-500 text-white ml-4'>View Menu</button>
            </div>
        </div>
        <div>
            <img className='rounded-xl' src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600" alt="Banner Image" />
        </div>
    </div>
  )
}

export default Banner