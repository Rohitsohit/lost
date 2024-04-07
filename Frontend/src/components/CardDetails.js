import React from 'react'
import ImageCarousel from './ImageCarousel'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
export default function CardDetails() {

       const { id } = useParams();
       const items = useSelector((state) => state.items);
       const item = items.find((item) => item._id.toString() === id);

    return (
 
        <>
            <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div class="lg:w-1/2 xl:w-5/12 p-4 sm:p-12">
                        <div class="mt-12 flex flex-col items-center">
                            <h1 class="text-2xs xl:text-3xl font-extrabold">
                                {item.category}
                            </h1>
                            <div class="flex flex-col items-center"> 
                                <div class="my-12 border-b text-center">
                                    <div
                                        class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        {item.details}
                                    </div>
                                </div>
                                </div>
                            <div class="w-full flex-1 mt-8">                                
                                <div class="mx-auto max-w-xs">
                                    <button
                                        class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span class="ml-3">
                                            Message
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Images */}

                    <div class="flex-1 bg-indigo-100 text-center">
                        <ImageCarousel slides={item.images} ></ImageCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}
