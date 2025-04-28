import React, { useState , useEffect} from "react";
import { foodItemsWithCategory as data } from "../../data";
import { ShoppingBagIcon, Star } from "lucide-react";
// import { useDispatch } from "react-redux";



const Menu = () => {


  const [selectadeCategory , setSelectadeCategory]= useState("All")
  const [addData , setAddData] = useState([])


  let filterData;
  if (selectadeCategory === "All") {
    filterData = data;
  } else {
    filterData = data.filter((item) => item.category === selectadeCategory);
  }


  // const [addData, setAddData] = useState([]);

  useEffect(() => {
    // Load data from localStorage when component mounts
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    setAddData(storedData);
  }, []);

  useEffect(() => {
    // Update localStorage whenever addData changes
    localStorage.setItem("data", JSON.stringify(addData));
  }, [addData]);

  const handleAddToCart = (item) => {
    setAddData(prevData => [...prevData, item]);
  };

  const uniqueCategories = [
    "All",
    ...new Set(data.map((item) => item.category)),
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mt-10">Our Menu</h1>
      <div className="flex flex-wrap gap-2 mt-10 ">
        {uniqueCategories.map((category , index) => (
          <button key={index} onClick={()=>setSelectadeCategory(category)} className={`px-4 py-2 rounded-full  ${
            selectadeCategory === category
              ? "bg-orange-500 text-white"
              : "bg-gray-200"
          }`}>
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {filterData.map((items) => (
          <div key={items.id} className="shadow-xl rounded-2xl relative">
            <img src={items.image} className="h-48 w-full object-cover" alt="" />
            <p className="absolute right-5 top-5 bg-white px-2 py-1 rounded-2xl">${items.price}</p>
            <div className="p-6 space-y-6">
              <div className="flex justify-between">
                <p>{items.name}</p>
                <p className="flex">
                  <span>
                    <Star className="text-orange-500 mr-1" />
                  </span>{" "}
                  {items.rating}
                </p>
              </div>
              <p>{items.description}</p>
              <div className="flex justify-between items-center">
                <p>{items.category}</p>
                <button className="flex bg-orange-500 px-4 py-2 rounded-lg" onClick={()=>{handleAddToCart(items)}}>
                  <ShoppingBagIcon className="mr-2 text-white" /> <span className="text-white" >Add To Cart</span> 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;