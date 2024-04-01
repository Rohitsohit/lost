import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import { useDispatch } from "react-redux";
import {addItems} from "../actions/items"
import { useNavigate } from "react-router-dom";
const itemsData = {
    category: "",
    details: "",
    location: ""
};

export default function AddItem() {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState(itemsData);
    const history = useNavigate();
    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addItems(formData,history));
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
                                <input type="file" name="file" id="file" className="sr-only" />
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
                    <ImageCarousel slides={slides}></ImageCarousel>
                </div>
            </div>
        </>
    );
}
