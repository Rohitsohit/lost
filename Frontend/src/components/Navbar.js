import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Check screen width to determine the initial state of the sidebar
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }

    // Event listener for window resize to update sidebar state
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* sidebar */}
      <div className={`md:hidden ${isSidebarOpen ? 'block' : 'hidden'} fixed inset-0 z-50 bg-gray-800 opacity-75`} onClick={toggleSidebar}></div>
      <div className={`md:hidden ${isSidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transition duration-300 transform overflow-y-auto`} onClick={toggleSidebar}>
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">Sidebar</span>
        </div>
        <nav className="flex-1 px-2 py-4 bg-gray-800">
          <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Messages
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Settings
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
          <div className="flex items-center px-4">
            <button className="text-gray-500 focus:outline-none focus:text-gray-700" onClick={toggleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
          </div>
          <div className="flex items-center pr-4">
            <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
          <p className="mt-2 text-gray-600">This is an example dashboard using Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
