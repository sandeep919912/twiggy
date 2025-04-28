// import React from 'react'
// import {
//   Clock,
//   Truck,
//   Star,
//   ChefHat,
//   ArrowRight,
//   UtensilsCrossed,
//   Wallet,
// } from "lucide-react";

// const features = [
//   {
//     id: 1,
//     icon: Clock,
//     title: "Fast Delivery",
//     description: "Hot food delivered to your doorstep in 30 minutes",
//   },
//   {
//     id: 2,
//     icon: ChefHat,
//     title: "Expert Chefs",
//     description: "Prepared by experienced professional chefs",
//   },
//   {
//     id: 3,
//     icon: UtensilsCrossed,
//     title: "Premium Quality",
//     description: "Using only the finest ingredients available",
//   },
//   {
//     id: 4,
//     icon: Wallet,
//     title: "Best Prices",
//     description: "Affordable prices with great value",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <>
//     <div className='text-center mt-10'>
//         <h1 className='text-4xl font-bold text-gray-900'>Why Choose Us</h1>
//         <p className='text-lg mt-1'>Experience the best food delivery service in town</p>
//     </div>
//     <div>
//         {features.map((item)=>{
//           <div>
//             <item.icon/>
//             <p>{item.title}</p>
//             <p>{item.description}</p>
//           </div>
//         })}
//     </div>
//     </>
//   )
// }

// export default WhyChooseUs



import React from "react";
import {
  Clock,
  Truck,
  Star,
  ChefHat,
  ArrowRight,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
const features = [
  {
    id: 1,
    icon: Clock,
    title: "Fast Delivery",
    description: "Hot food delivered to your doorstep in 30 minutes",
  },
  {
    id: 2,
    icon: ChefHat,
    title: "Expert Chefs",
    description: "Prepared by experienced professional chefs",
  },
  {
    id: 3,
    icon: UtensilsCrossed,
    title: "Premium Quality",
    description: "Using only the finest ingredients available",
  },
  {
    id: 4,
    icon: Wallet,
    title: "Best Prices",
    description: "Affordable prices with great value",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <div className="text-center mt-28">
        <h1 className="text-4xl font-bold text-gray-700">Why Choose Us</h1>
        <p className="text-gray-700 mt-5">
          Experience the best food delivery service in town
        </p>
      </div>
      <div className="grid grid-cols-4 container mx-auto gap-6 mt-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="text-center flex items-center flex-col shadow-xl p-14 space-y-4"
          >
            <div className="bg-orange-200 p-4 rounded-full">
              <feature.icon className="text-[#F47521]" />
            </div>
            <h3 className="font-bold">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyChooseUs;