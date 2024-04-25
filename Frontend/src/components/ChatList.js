import React, { useState,useEffect } from 'react';
import { getUserDetails } from '../actions/auth';
export default function ChatList({data,loggedInUser,online}) {
    const [userDetails, setuserDetails] = useState();
    
  useEffect(() => {
    const userId = data.members.find((id)=>id !=loggedInUser)
    fetchUserDetails(userId)
  }, [])
  
  const fetchUserDetails =async(id)=>{ 
        const data = await getUserDetails(id)
        setuserDetails(data);
  }
  
  
  return  userDetails &&(
    <div className="flex flex-col flex-auto h-full p-2 lg:sticky top-0">
  <div className="flex flex-col space-y-1 mt-2 -mx-2 overflow-y-auto">
    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
      <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
        {userDetails.name.charAt(0)}
      </div>
      <div className="ml-2 text-lg text-gray-600 font-bold">
        {userDetails.name}
        <span className="ml-1 text-xs font-semibold text-gray-500"> 
          {online ? 'Online' : 'Offline'}
        </span>
      </div>
    </button>
  </div>
</div>

  
      
  );
}


