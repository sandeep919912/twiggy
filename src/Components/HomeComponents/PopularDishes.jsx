import React from "react";
import { foodItemsWithCategory as data } from "../../../data.js";
const PopularDishes = () => {
  console.log(data);
  return (
    <>
      <h1 className="text-center text-4xl font-bold mt-20 text-gray-700">Popular Dishes</h1>
      <div className="grid grid-cols-3 gap-6 container mx-auto mt-10">
        {data.slice(0,3).map((item) => (
          <div key={item.id} className="shadow-xl rounded-lg"> 
            <img src={item.image} className="h-48 object-cover w-full rounded-lg" alt="" />
            <div className="p-6 space-y-4">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-xl text-orange-500 font-bold">${item.price}</p>
                <button className="px-2 py-4 bg-orange-500 text-white rounded-lg ">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularDishes;