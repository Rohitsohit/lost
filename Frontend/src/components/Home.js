import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddItem from "./AddItem";
import Card from "./Card";
import CardDetails from "./CardDetails";
import Auth from "./Auth";
import SearchMap from './SearchMap';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChatLayout from './ChatLayout';

export default function Home() {
    const history = useNavigate();
    const [isUser, setIsUser] = useState(JSON.parse(localStorage.getItem("profile-LostAndFound")));
    const dispatch = useDispatch();

    const [searchKey, setSearchKey] = useState("");
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'New message 1' },
        { id: 2, message: 'New message 2' },
        { id: 3, message: 'New message 3' },
    ]);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchKey(e.target.value.toLowerCase());
    };

    useEffect(() => {
        setIsUser(JSON.parse(localStorage.getItem("profile-LostAndFound")));
    }, [history]);

    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        history("/");
        setIsUser(null);
    };

    return (
        <div className={`flex min-h-screen bg-gray-100 ${isSidebarOpen ? 'overflow-hidden' : ''}`}>
            {/* Sidebar */}
            <div className={`md:flex md:flex-col w-64 bg-gray-800 ${isSidebarOpen ? '' : 'hidden'}`}>
                <div className="flex items-center justify-center h-16 bg-gray-900">
                    <span className="text-white font-bold uppercase">Lost and Found</span>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 bg-gray-800">
                        <Link to="/" onClick={(e) => setSearchKey(e.target.value = '')} className="flex items-center rounded-full px-4 py-2 text-gray-100 hover:bg-gray-100 no-underline">
                            Browse All
                        </Link>
                        {isUser ? (
                            <>
                                <Link to="/add-item" className="flex items-center rounded-full px-4 py-2 mt-2 text-gray-100 hover:bg-gray-100 no-underline">
                                    Add lost item.
                                </Link>
                                <Link to="/search-by-map" className="flex items-center rounded-full px-4 py-2 mt-2 text-gray-100 hover:bg-gray-200 no-underline">
                                    Search with maps.
                                </Link>
                            </>
                        ) : (
                            <></>
                        )}
                        <h4 className="flex items-center rounded-full px-4 py-2 mt-2 text-gray-100 bg-gray-800 no-underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Category
                        </h4>
                        <div className="flex justify-center gap-2 flex-wrap p-2">
                            <button className="bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-600" onClick={(e) => setSearchKey(e.target.value = 'card')} >card</button>
                            <button className="bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-600" onClick={(e) => setSearchKey(e.target.value = 'wallet')}>wallet</button>
                            <button className="bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-600" onClick={(e) => setSearchKey(e.target.value = 'Key')}>Keys</button>
                            <button className="bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-600" onClick={(e) => setSearchKey(e.target.value = 'document')}>document</button>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-y-auto">
                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                    <div className="flex items-center px-4">
                        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <input
                            className="mx-4 w-full border rounded-md px-4 py-2 focus:border-gray-900 hover:text-gray-00"
                            type="text"
                            onChange={handleSearch}
                            placeholder="Search your item here."
                        />
                    </div>
                    <div className="flex items-center pr-4">
                        {isUser ? (
                            <div className="flex items-center space-x-5">
                                <Link to="/messages" className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 no-underline">
                                    Messages
                                </Link>
                                <Link onClick={handleLogOut} className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 no-underline">
                                    LogOut
                                </Link>
                            </div>
                        ) : (
                            <Link to="/auth" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 no-underline">
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>

                {/* Content Area */}
                <div>
                    <Routes>
                        <Route path="/" exact element={<Card searchKey={searchKey} />} />
                        <Route path="/auth" exact element={<Auth />} />
                        <Route path="/details/:id" element={<CardDetails />} />
                        <Route path="/add-item" element={<AddItem />} />
                        <Route path="/messages" element={<ChatLayout />} />
                        <Route path="/search-by-map" exact element={<SearchMap />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
