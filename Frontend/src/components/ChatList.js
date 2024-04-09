import React, { useState,useEffect } from 'react';
import { getUserDetails } from '../actions/auth';
export default function ChatList({data,loggedInUser}) {
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
        <div class="flex flex-col mt-8">
          <div class="flex flex-row items-center justify-between text-xs">
            <span class="font-bold">Active Conversations</span>
          </div>
          <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
              >
                {userDetails.name.charAt(0)}
              </div>
              <div class="ml-2 text-sm font-semibold">{userDetails.name}</div>
            </button>
          </div>
        </div>
      
  );
}


