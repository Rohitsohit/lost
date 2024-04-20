import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Card({ searchKey }) {
    const [items, setItems] = useState();
    const history = useNavigate();
    const data = useSelector((state) => state.items);

    useEffect(() => {
        if (searchKey.trim() === '') {
            setItems(data);
        } else {
            const filteredItems = data.filter(
                (item) =>
                    item.category.toLowerCase().includes(searchKey.toLowerCase()) ||
                    item.location.toLowerCase().includes(searchKey.toLowerCase())
            );
            setItems(filteredItems);
        }
    }, [data, searchKey]);

    const handleClick = (item) => {
        history(`/details/${item._id}`);
    }

    return !items ? (
        <>Loading...</>
    ) : (
        <>
            <div className="text-center p-8">
                <h1 className="text-3xl">Lost Items</h1>
            </div>
            <section id="Projects" className="w-full mx-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-y-10 gap-x-2 mt-10 mb-5">
                {items.map((item) => (
                    <div key={item._id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => handleClick(item)}>
                        <a>
                            <img 
                                src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="Product"
                                className="h-80 w-72 object-cover rounded-t-xl"
                            />
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">{item.category}</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">{item.details}</p>
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">{item.location}</p>
                                    <div className="ml-auto">
                                        {/* Date placeholder */}
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
