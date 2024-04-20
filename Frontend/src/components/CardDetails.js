import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { createChats } from '../actions/chatActions';
import { useNavigate } from "react-router-dom";

export default function CardDetails() {

    const history = useNavigate();
    const chatData = {
        senderId: "",
        receiverId: ""
    };

    const { id } = useParams();
    const items = useSelector((state) => state.items);
    const item = items.find((item) => item._id.toString() === id);
    console.log(item)
    const user = useSelector((state) => state.auth.authData.result);

    const [selectedImage, setSelectedImage] = useState(item.images[0]);

    const handleMessage = async (e) => {
        e.preventDefault();
        console.log("messege")
        // chatData.senderId = user._id;
        // chatData.receiverId = item.userId;
        // await createChats(chatData);
        // history('/messages');
    };

    return (
        <div className="font-[sans-serif]">
            <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
                        <img src={selectedImage} alt="Product" className="w-4/5 rounded object-cover" />
                        <hr className="border-white border-2 my-6" />
                        <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center mx-auto">
                            {item.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Product${index}`}
                                    className="w-24 cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-gray-800">{item.category}</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-400 text-xl"> <span className="text-sm-bold ml-1">Time</span></p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-gray-800">About the Item</h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-md text-gray-800">
                                <li>{item.details}</li>
                                    </ul>
                        </div>
                        <div className="mt-8 max-w-md">
                        <h3 class="text-lg font-bold text-gray-800">{item.location}</h3>
                            <div className="flex items-start mt-8" onClick={handleMessage}>
                                <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                                <div className="ml-2">
                                    <h4 className="text-lg font-bold">{item.user}</h4>
                                    <div className="flex space-x-1 mt-1">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


 // <>
        //     <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center p-2">
        //         <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        //             <div class="lg:w-1/2 xl:w-5/12 p-4 sm:p-12">
        //                 <div class="mt-12 flex flex-col items-center">
        //                     <h1 class="text-2xs xl:text-3xl font-extrabold">
        //                         {item.category}
        //                     </h1>
        //                     <div class="flex flex-col items-center"> 
        //                         <div class="my-12 border-b text-center">
        //                             <div
        //                                 class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
        //                                 {item.details}
        //                             </div>
        //                         </div>
        //                         </div>
        //                     <div class="w-full flex-1 mt-8">                                
        //                         <div class="mx-auto max-w-xs">
        //                             <button onClick={handleMessage}
        //                                 class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
        //                                 <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
        //                                     stroke-linecap="round" stroke-linejoin="round">
        //                                     <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        //                                     <circle cx="8.5" cy="7" r="4" />
        //                                     <path d="M20 8v6M23 11h-6" />
        //                                 </svg>
        //                                 <span class="ml-3">
        //                                     Message
        //                                 </span>
        //                             </button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
                    
        //             {/* Images */}

        //             <div class="flex-1 bg-indigo-100 text-center">
        //                 <ImageCarousel slides={item.images} ></ImageCarousel>
        //             </div>
        //         </div>
        //     </div>

            
        // </>