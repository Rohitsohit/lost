import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItems } from "../actions/items";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const itemsData = {
    category: "",
    details: "",
    location: "",
    user: "",
    email: "",
    userId: "",
    images: []
};

export default function AddItem() {
    const user = useSelector((state) => state.auth);
    console.log(user)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(itemsData);
    const history = useNavigate();
    const [slides, setSlides] = useState([]);
    const [isLocationEditable, setIsLocationEditable] = useState(true);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        formData.email = user.email;
        formData.user = user.name;
        formData.userId = user._id;

        dispatch(addItems(formData, history));
    };

    const imageHandle = async (e) => {
        const data = new FileReader();

        data.addEventListener("load", () => {
            setFormData({
                ...formData,
                images: [...formData.images, data.result],
            });
            setSlides((prevSlides) => [...prevSlides, data.result]);
        });

        data.readAsDataURL(e.target.files[0]);
    };

    const handleImageClose = (indexToRemove) => {
        setSlides((prevSlides) => prevSlides.filter((_, index) => index !== indexToRemove));
        setFormData({
            ...formData,
            images: formData.images.filter((_, index) => index !== indexToRemove),
        });
    };

    const getCurrentLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setFormData({
                        ...formData,
                        location: `Latitude: ${latitude}, Longitude: ${longitude}`,
                    });
                    setIsLocationEditable(true);
                },
                (error) => {
                    console.error("Error occurred while getting geolocation:", error);
                    alert("Error occurred while getting geolocation. Please try again.");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    return (
        <>
            <div className="flex items-center justify-center p-8">
                <div className="mx-auto w-full max-w-[750px] max-h-[750px] bg-white">
                    <form className="py-4 px-9" onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="category" className="mb-3 block text-xl font-medium text-[#07074D]">
                                Add Found Item Here.
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
                            <input
                                type="text"
                                name="details"
                                id="details"
                                placeholder="Details"
                                onChange={onChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-3 flex items-center">
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={onChange}
                                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mr-4 ${isLocationEditable ? '' : 'bg-gray-200'}`}
                                readOnly={!isLocationEditable}
                            />
                            <button
                                type="button"
                                onClick={getCurrentLocation}
                                className="rounded-md bg-[#6A64F1] py-3 px-6 text-center text-base font-semibold text-white outline-none hover:bg-[#6B7280]"
                            >
                                Get Current Location
                            </button>
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
                                            All Browse.
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Submit
                        </button>
                    </form>

                    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            {slides.map((image, index) => (
                                <div className="flex w-1/3 flex-wrap relative" key={index}>
                                    <div className="w-full p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block h-full w-full rounded-lg object-cover object-center"
                                            src={image}
                                        />
                                        <button
                                            className="absolute top-0 right-0 m-2 bg-white p-2 rounded-full shadow-lg z-10"
                                            onClick={() => handleImageClose(index)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
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
