import React from 'react'
import ImageCarousel from './ImageCarousel'

export default function AddItem() {
    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
      ];
  return (
    <>
    <div class="flex items-center justify-center">
   
    <div class="mx-auto w-full max-w-[750px] max-h-[750px] bg-white">
        <form class="py-4 px-9">
            <div class="mb-3">
                <label for="text" class="mb-3 block text-base font-medium text-[#07074D]">
                    Category:
                </label>
                <input type="text" name="email" id="email" placeholder="category"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div class="mb-3">
                <label for="text" class="mb-3 block text-base font-medium text-[#07074D]">
                    Descitption
                </label>
                <input type="text" name="email" id="email" placeholder="Details"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div class="mb-3">
                <label for="text" class="mb-3 block text-base font-medium text-[#07074D]">
                    Location
                </label>
                <input type="text" name="email" id="email" placeholder="Location"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div class="mb-3 pt-2">
                <label class=" block text-xl font-semibold text-[#07074D]">
                    Upload Photos
                </label>

                <div class="mb-8">
                    <input type="file" name="file" id="file" class="sr-only" />
                    <label for="file"
                        class="relative flex min-h-[100px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                        <div>
                            <span
                                class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                Browse
                            </span>
                        </div>
                    </label>
                </div>

                
            </div>

            <div>
                
            </div>
            
        </form>
        <button
                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Submit.
                </button>
    </div>

    
    <ImageCarousel slides={slides}></ImageCarousel>
</div>
    
    
    
    
    </>
  )
}
