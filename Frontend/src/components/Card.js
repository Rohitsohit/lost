import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Card() {
    const [items, setItems] = useState();
    const history = useNavigate();
    const data = useSelector((state) => state.items);
    useEffect(() => {
    setItems(data); 
    }, [data])
   
    const handleClick =(item)=>{
        history(`/details/${item._id}`);
    }


  return !items?(<>Loading...</>):(
    <>
     {items.map((item) => (
            <section id="Projects" onClick={()=>handleClick(item)}
            class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        
        
            
        
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                        <span class="text-gray-400 mr-3 uppercase text-xs">{item.category}</span>
                        <p class="text-lg font-bold text-black truncate block capitalize">{item.details}</p>
                        <div class="flex items-center">
                           
                                <p class="text-sm text-gray-600 cursor-auto ml-2">{item.location}</p>
                            
                            <div class="ml-auto">
                               date
                                </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
      ))}
       











    
    
    </>


  )
}
