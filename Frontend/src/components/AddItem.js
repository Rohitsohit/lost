import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import { useDispatch } from "react-redux";
import {addItems} from "../actions/items"
import { useNavigate } from "react-router-dom";
import ImageDesign from './ImageDesign';
const itemsData = {
    category: "",
    details: "",
    location: "",
    images:[]
};

export default function AddItem() {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState(itemsData);
    const history = useNavigate();
    const [slides, setSlides] = useState([]);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        dispatch(addItems(formData,history));
    };

    const imageHandle = async (e) => {
        const data = new FileReader();
    
        data.addEventListener("load", () => {
          setFormData({
            ...formData,
            images: [...formData.images, data.result], // append new image URL to the array
          });
          setSlides((prevSlides) => [...prevSlides, data.result]); // append new image URL to the slides array
        });
    
        data.readAsDataURL(e.target.files[0]);
      };
    
      const handleImageClose = (indexToRemove) =>{
        setSlides((prevSlides) => prevSlides.filter((_, index) => index !== indexToRemove));
        setFormData({
          ...formData,
          images: formData.images.filter((_, index) => index !== indexToRemove),
        });
      };
        
      
    
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="mx-auto w-full max-w-[750px] max-h-[750px] bg-white">
                    <form className="py-4 px-9" onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="category" className="mb-3 block text-base font-medium text-[#07074D]">
                                Category:
                            </label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                placeholder="Category"
                                onChange={onChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="details" className="mb-3 block text-base font-medium text-[#07074D]">
                                Description:
                            </label>
                            <input
                                type="text"
                                name="details"
                                id="details"
                                placeholder="Details"
                                onChange={onChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="location" className="mb-3 block text-base font-medium text-[#07074D]">
                                Location:
                            </label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                placeholder="Location"
                                onChange={onChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-3 pt-2">
                            <label className=" block text-xl font-semibold text-[#07074D]">
                                Upload Photos
                            </label>

                            <div className="mb-8">
                                <input type="file" onChange={imageHandle} name="file" id="file" className="sr-only" />
                                <label
                                    htmlFor="file"
                                    className="relative flex min-h-[100px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                >
                                    <div>
                                        <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                            Browse
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div>
                            
                        </div>

                        <button
                            type="submit"
                            className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Submit
                        </button>
                    </form>
                    {/* <ImageCarousel slides={slides}></ImageCarousel> */}
                    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
  <div class="-m-1 flex flex-wrap md:-m-2">


  {slides.map((image,index) => (
           <div class="flex w-1/3 flex-wrap relative">
           <div class="w-full p-1 md:p-2">
               <img
                   alt="gallery"
                   class="block h-full w-full rounded-lg object-cover object-center"
                   src={image}/>
               <button class="absolute top-0 right-0 m-2 bg-white p-2 rounded-full shadow-lg z-10" onClick={()=>handleImageClose(index)}>
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                   </svg>
               </button>
           </div>
       </div>
      ))}



      

  </div>
</div>
                    

                </div>
            </div>
        </>
    );
}
