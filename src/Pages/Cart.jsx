import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    setData(storedData);
  }, []);

  return (
    <div>
      <h2 className='text-[25px] font-bold mt-10 mb-10 ml-5'>Cart ({data.length}) Added</h2>
      {data.length === 0 ? (
        <p className='text-red-500'>Cart is empty.</p>
      ) : (
        data.map((item, index) => (
          <div key={index} className='flex w-1/2 h-25 ml-5 shadow-md h-15 p-2 rounded-lg'>
            <div className='w-20 max-h-15'><img src={item.image} alt="" className='w-20 h-full rounded-lg object-cover object-center'/></div>
            <div className='ml-2 '>
              <h1 className='font-bold '>{item.name}</h1>
              <p>{item.description}</p>
              <span className='border bg-orange-500 text-white rounded-md px-2'>{item.price}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
