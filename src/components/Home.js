import AddItem from "./AddItem";
import Card from "./Card";
import CardDetails from "./CardDetails";
import ChatList from "./ChatList";
import Chatbox from "./Chatbox";
import SignUp from "./SignUp"
export default function Home() {
    
    return (
        <>
            <div class="flex h-screen bg-gray-100">

                <div class="md:flex flex-col w-64 bg-gray-800">
                    <div class="flex items-center justify-center h-16 bg-gray-900">
                        <span class="text-white font-bold uppercase">Lost and Found</span>
                    </div>
                    <div class="flex flex-col flex-1 overflow-y-auto">
                        <nav class="flex-1 px-2 py-4 bg-gray-800">
                            <a href="/" class="flex items-center rounded-full px-4 py-2 text-gray-100 hover:bg-gray-700">
                                Browse All
                            </a>
                            <a href="#" class="flex items-center rounded-full px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                                Add lost item.
                            </a>

                            

                            <a href="#" class="flex items-center rounded-full px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                                search with maps. 
                            </a>
                            <h4 class="flex items-center rounded-full px-4 py-2 mt-2 text-gray-100 bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Category
                            </h4>
                            <div class="flex justify-center gap-2 flex-wrap p-2">
    <button class="bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-600">card</button>
    <button class="bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-600">wallet</button>
    <button class="bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-600">Keys</button>
    <button class="bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-600">camera</button>
</div>

                        </nav>
                    </div>
                </div>


                <div class="flex flex-col flex-1 overflow-y-auto">
                    <div class="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                    <div class="flex items-center px-4">
              
                <input class="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search your item here. "/>
            </div>

             


                        <div class="flex items-center pr-4">

                            <button
                                class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                               hi, User
                            </button>
                        </div>
                    </div>

                    

                    {/* listing down her  */}

                    <ChatList/>
                    {/* <SignUp></SignUp> */}
                    {/* <Card></Card> */}
                    {/* <CardDetails  ></CardDetails> */}
                    {/* <Chatbox></Chatbox> */}
                    {/* <AddItem></AddItem> */}
                </div>

            </div>
        </>
    )
}


