import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddItem from "./AddItem";
import Card from "./Card";
import CardDetails from "./CardDetails";
import ChatList from "./ChatList";
import Chatbox from "./Chatbox";
import SignUp from "./SignUp";
import SearchMap from './SearchMap';

export default function Home() {

    const [isUser, setIsUser] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'New message 1' },
        { id: 2, message: 'New message 2' },
        { id: 3, message: 'New message 3' },
    ]);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    return (
        <Router>
            <div className="flex min-h-screen bg-gray-100">

                {/* Sidebar */}
                <div className="md:flex flex-col w-64 bg-gray-800">
                    <div className="flex items-center justify-center h-16 bg-gray-900">
                        <span className="text-white font-bold uppercase">Lost and Found</span>
                    </div>
                    <div className="flex flex-col flex-1 overflow-y-auto">
                        <nav className="flex-1 px-2 py-4 bg-gray-800">
                            <Link to="/" className="flex items-center rounded-full px-4 py-2 text-gray-100 hover:bg-gray-700">
                                Browse All
                            </Link>
                            <Link to="/add-item" className="flex items-center rounded-full px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                                Add lost item.
                            </Link>
                            <Link to="/search-maps" className="flex items-center rounded-full px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                                Search with maps.
                            </Link>
                            <h4 className="flex items-center rounded-full px-4 py-2 mt-2 text-gray-100 bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Category
                            </h4>
                            <div className="flex justify-center gap-2 flex-wrap p-2">
                                <button className="bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-600">card</button>
                                <button className="bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-600">wallet</button>
                                <button className="bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-600">Keys</button>
                                <button className="bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-600">camera</button>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                        <div className="flex items-center px-4">
                            <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search your item here. "/>
                        </div>
                        <div className="flex items-center pr-4">
                            {isUser ? (
                                <span className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                                    Hi, User
                                </span>
                            ) : (
                                <div className="flex items-center space-x-4">
                                    <Link to="/signup" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                                        Sign In
                                    </Link>
                                    <Link to="/messages" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                                        Messages
                                    </Link>
                                    <div className="relative">
                                        <button onClick={toggleNotifications} className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                                            Notifications
                                        </button>
                                        {showNotifications && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                                {notifications.map(notification => (
                                                    <p key={notification.id} className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                                                        {notification.message}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-4">
                        <Routes>
                            <Route path="/" exact element={<Card />} />
                            <Route path="/signup" exact element={<SignUp />} />
                            <Route path="/card-details" element={<CardDetails />} />
                            <Route path="/add-item" element={<AddItem />} />
                            <Route path="/chatbox" element={<Chatbox />} />
                            <Route path="/search-by-map" element={<SearchMap />} />
                            <Route path="/messages" element={<ChatList />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
}
