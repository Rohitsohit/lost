import React, { useState } from 'react';
import { format } from "timeago.js";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { createChats } from '../actions/chatActions';
import { useNavigate } from "react-router-dom";

export default function CardDetails() {

    const [Address, setAddress] = useState();
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


    const getAddressFromLatLng = (location) => {
console.log(location.longitude)

const lat = location.latitude
const lng = location.longitude

    const google = window.google;
    const geocoder = new google.maps.Geocoder();
    const latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };

    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          setAddress(results[0].formatted_address);
        } else {
          console.log('No reßsults found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
  };

  getAddressFromLatLng(item.location)
  console.log(item)
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
                            <p className="text-gray-400 text-xl"> <span className="text-sm-bold ml-1">{format(item.createdAt)}</span></p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-gray-800">About the Item</h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-md text-gray-800">
                                <li>{item.details}</li>
                                    </ul>
                        </div>
                        <div className="mt-8 max-w-md">
                        <h3 class="text-lg font-bold text-gray-800">{Address}</h3>
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
