import React from 'react'

export default function Chatbox() {
  return (
    <>
    

  <div class="size-9/12  flex flex-col border shadow-md bg-white">
    <div class="flex items-center justify-between border-b p-2">
  
      <div class="flex items-center">
        <img class="rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <div class="pl-2">
          <div class="font-semibold">
            <a class="hover:underline" href="#">John Doe</a>
          </div>
          <div class="text-xs text-gray-600">Online</div>
        </div>
      </div>
  
      
     
    </div>

    <div class="flex-1 px-4 py-4 overflow-y-auto">
      

      <div class="flex items-center mb-4">
        <div class="flex-none flex flex-col items-center space-y-1 mr-4">
          <img class="rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          John Doe
        </div>
        <div class="flex-2  bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
          <div> consectetur adipisicing elit.</div>

    
          <div class="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
        
        </div>
      </div>

    

      <div class="flex items-center flex-row-reverse mb-4">
        <div class="flex-none flex flex-col items-center space-y-1 ml-4">
          <img class="rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          you
        </div>
        <div class="flex-2 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative">
          <div>adipisicing elitLorem ipsum dolor  </div>
          <div class="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div>
        </div>
      </div>
    </div>

    

<div class="p-4 border-t flex">
                <input id="user-input" type="text" placeholder="Type a message" class="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button id="send-button" class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">Send</button>
            </div>



  </div>





    
    
    
    </>
  )
}
