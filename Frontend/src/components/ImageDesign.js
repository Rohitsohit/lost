import React from 'react'

export default function ImageDesign(slides) {

    console.log(slides.slides)
  return (
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
  <div class="-m-1 flex flex-wrap md:-m-2">


  {slides.slides.map((src) => (
           <div class="flex w-1/3 flex-wrap relative">
           <div class="w-full p-1 md:p-2">
               <img
                   alt="gallery"
                   class="block h-full w-full rounded-lg object-cover object-center"
                   src={src}/>
               <button class="absolute top-0 right-0 m-2 bg-white p-2 rounded-full shadow-lg z-10">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                   </svg>
               </button>
           </div>
       </div>
      ))}



      

  </div>
</div>
  )
}
