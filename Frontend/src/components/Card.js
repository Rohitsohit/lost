import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";
export default function Card({ searchKey }) {
    const [items, setItems] = useState();
    const [Address, setAddress] = useState();
    const history = useNavigate();
    const data = useSelector((state) => state.items);
    console.log(data)
    useEffect(() => {
        if (searchKey.trim() === '') {
            setItems(data);
        } else {
            const filteredItems = data.filter(
                (item) =>
                    item.category.toLowerCase().includes(searchKey.toLowerCase()) 
            );
            setItems(filteredItems);
        }
    }, [data, searchKey]);

    const handleClick = (item) => {
        history(`/details/${item._id}`);
    }
   

    return !items ? (
        <>Loading....</>
    ) : (
        <>
            <div className="text-center p-8">
                <h1 className="text-3xl  font-bold uppercase">Lost Items</h1>
            </div>
            <section id="Projects" className="w-full mx-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-y-10 gap-x-2 mt-10 mb-5">
                {items.map((item) => (
                    <div key={item._id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => handleClick(item)}>
                        <a>
                            <img 
                                src={item.images[0]}
                                alt="Product"
                                className="h-80 w-72 object-cover rounded-t-xl"
                            />
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">{item.category}</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">{item.details}</p>
                                <div className="flex items-center">
                                <p className="text-sm text-gray-600 cursor-auto ml-2">
      </p>                                    <div className="ml-auto">
                                        {/* Time placeholder */}
                                        {format(item.createdAt)}
                                        
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </>
    );
}
