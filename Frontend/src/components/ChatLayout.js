import React, { useState, useEffect, useRef } from 'react';
import ChatList from './ChatList';
import { userChats } from '../actions/chatActions';
import Chatbox from './ChatBox.js';
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

export default function ChatLayout() {

  const user = useSelector((state) => state.auth.authData.result);
  
  const [currentChatList, setCurrentChatList] = useState(null);
  const [chatList, setChatList] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const socket = useRef();

  //user in dependencies to get live chat
  useEffect(() => {
    socket.current =io('https://lost-chatt-serger.onrender.com')
    socket.current.emit("new-user-add", user._id);
    socket.current.on('get-users',(users)=>{
      setOnlineUsers(users);
      
    })
  }, [user])
  

  useEffect(() => {
    getChatList();
  }, [user._id]);


  // Send Message to socket server
  useEffect(() => {
    if (sendMessage!==null) {
      socket.current.emit("send-message", sendMessage);}
  }, [sendMessage]);


  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    }
    );
  }, []);

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  const getChatList = async () => {
    try {
      const chatListData = await userChats(user._id);
      setChatList(chatListData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className="flex h-screen antialiased text-gray-800">
  <div className="flex flex-row h-full w-full overflow-x-hidden">
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 lg:sticky top-0"> {/* Added lg:sticky and top-0 */}
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </div>
        <div className="ml-2 font-bold text-2xl">Your Chats</div>
      </div>
      {/* chatList */}
      {chatList && chatList.map((chat) => (
        <div onClick={() => 
        
        setCurrentChatList(chat)}>
          <ChatList key={chat._id} data={chat} loggedInUser={user._id} online={checkOnlineStatus(chat)} />
        </div>
      ))}
    </div>

    {/* Chatbox */}
    <Chatbox chat={currentChatList} loggedInUser={user._id} setSendMessage={setSendMessage} receivedMessage={receivedMessage}></Chatbox>
  </div>
</div>


    </>
  );
}
