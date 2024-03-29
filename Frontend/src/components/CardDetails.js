import React from 'react'
import ImageCarousel from './ImageCarousel'

export default function CardDetails() {
    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
      ];
    return (
      

        <>

            <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div class="lg:w-1/2 xl:w-5/12 p-4 sm:p-12">
                        <div class="mt-12 flex flex-col items-center">
                            <h1 class="text-2xs xl:text-3xl font-extrabold">
                                Category
                            </h1>
                            <div class="flex flex-col items-center"> 
                                <div class="my-12 border-b text-center">
                                    <div
                                        class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        I found a wallet earlier today. It's a black leather wallet with a smooth texture. The brand name 'Fossil' is embossed on the front flap in gold letters. The wallet has a bifold design and measures approximately 4 inches in width and 3 inches in height when closed. It contains several compartments including slots for cards, a transparent ID window, and a larger pocket for bills. There are also a few receipts and a driver's license belonging to someone named John Doe inside. If you know the owner or have any information that might help reunite this wallet with its rightful owner, please let me know.
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
                        <ImageCarousel slides={slides} ></ImageCarousel>
                    </div>
                </div>
            </div>


        </>



    )
}
