import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItems } from "../actions/items";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const itemsData = {
    category: "",
    details: "",
    location: {
        latitude:"",
        longitude:""
    },
    user: "",
    email: "",
    userId: "",
    images: []
};

export default function AddItem() {
    const user = useSelector((state) => state.auth.authData.result);
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
                        location : {
                            latitude:latitude,
                            longitude:longitude
                        }, 
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
            <div className="flex items-center justify-center p-4 md:p-8">
                <div className="mx-auto w-full max-w-[750px] bg-white rounded-lg shadow-lg">
                    <form className="py-4 px-6 md:px-9" onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-lg font-medium text-[#07074D] mb-2">
                                Add Found Item Here.
                            </label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                placeholder="Category"
                                onChange={onChange}
                                className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-lg font-medium text-gray-700 focus:outline-none focus:border-indigo-500"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                name="details"
                                id="details"
                                placeholder="Details"
                                onChange={onChange}
                                className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-lg font-medium text-gray-700 focus:outline-none focus:border-indigo-500"
                            />
                        </div>

                        <div className="mb-4 flex items-center">
                            <input
                                type="text"
                                name="location"
                                value={`${formData.location.latitude} ${formData.location.longitude}`}
                                onChange={onChange}
                                className={`w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-lg font-medium text-gray-700 focus:outline-none focus:border-indigo-500 mr-2 ${isLocationEditable ? '' : 'bg-gray-200'}`}
                                readOnly={!isLocationEditable}
                            />
                            <button
                                type="button"
                                onClick={getCurrentLocation}
                                className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
                            >
                                Current Location
                            </button>
                        </div>

                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-[#07074D] mb-2">
                                Upload Photos
                            </label>
                            <div className="mb-2">
                                <input type="file" onChange={imageHandle} name="file" id="file" className="sr-only" />
                                <label
                                    htmlFor="file"
                                    className="relative flex items-center justify-center rounded-md border-dashed border-gray-300 p-3 text-lg font-medium text-gray-700 cursor-pointer"
                                >
                                    Browse
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-md bg-gray-700 py-3 px-4 text-lg font-semibold text-white hover:bg-gray-600 focus:outline-none"
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
