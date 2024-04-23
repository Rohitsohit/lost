import React from 'react';
import { format } from "timeago.js";
import { addMessage, getMessages } from '../actions/chatActions';
import { getUserDetails } from '../actions/auth';

export default function ChatBox({ chat, loggedInUser, setSendMessage, receivedMessage }) {
  // const [reciverDetails, setReciverDetails] = useState();
  // const [messages, setMessages] = useState([]);
  // const [newMessage, setNewMessage] = useState("");
  // const scroll = useRef();

  // useEffect(() => {
  //   if (chat) {
  //     const userId = chat.members.find((id) => id !== loggedInUser);
  //     fetchUserDetails(userId);
  //   }
  // }, [chat]);

  // const fetchUserDetails = async (id) => {
  //   // const data = await getUserDetails(id);
  //   // setReciverDetails(data);
  // };

  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     try {
  //       // const data = await getMessages(chat._id);
  //       // setMessages(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   if (chat !== null) fetchMessages();
  // }, [chat]);

  // const handleChange = (e) => {
  //   setNewMessage(e.target.value);
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
    
  //   if (!newMessage.trim()) {
  //     return;
  //   }

  //   const textMessage = {
  //     senderId: loggedInUser,
  //     text: newMessage,
  //     chatId: chat._id,
  //   };

  //   const receiverId = chat.members.find((id) => id !== loggedInUser);

  //   setSendMessage({ ...textMessage, receiverId });

  //   try {
  //     // const data = await addMessage(textMessage);
  //     // setMessages([...messages, data]);
  //     setNewMessage("");
  //   } catch {
  //     console.log("error");
  //   }
  // };

  // useEffect(() => {
  //   if (receivedMessage != null && receivedMessage.chatId === chat._id) {
  //     setMessages([...messages, receivedMessage]);
  //   }
  // }, [receivedMessage]);

  // useEffect(() => {
  //   scroll.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  return (
    <>
    chatbox
    </>
    // <>
    //   {chat ? (
    //     <>
    //       <div className="flex flex-col flex-auto h-full p-1 lg:sticky top-0">
    //         <div className="bg-white p-4 mb-2 sticky top-0 z-10 flex items-center justify-between">
    //           {!reciverDetails ? (
    //             <></>
    //           ) : (
    //             <div className="flex items-center">
    //               <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
    //                 {reciverDetails.name.charAt(0)}
    //               </div>
    //               <div className="ml-4">
    //                 <h1 className="text-lg font-semibold inline">{reciverDetails.name}</h1>
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //         <div className="flex-1 overflow-y-auto">
    //           <div className="max-w-full mx-auto h-full flex flex-col justify-between">
    //             <div className="flex-1 flex flex-col space-y-2 shadow-md p-4 rounded-lg bg-white overflow-y-auto">
    //               {messages.length > 0 &&
    //                 messages.map((message, index) => (
    //                   <div
    //                     key={index}
    //                     className={`col-start-6 col-end-13 p-3 rounded-lg ${
    //                       message.senderId === loggedInUser ? 'flex-row-reverse' : 'flex-row'
    //                     }`}
    //                   >
    //                     {message.senderId === loggedInUser ? (
    //                       <div className="flex flex-col items-end">
    //                         <span className="text-sm text-gray-600">You</span>
    //                         <div className="flex items-end justify-end">
    //                           <div ref={scroll} className="bg-gray-300 text-gray-700 p-2 rounded-lg max-w-xs">
    //                             {message.text}
    //                           </div>
    //                         </div>
    //                         {/* <div className="text-xs text-gray-600 self-end mt-1">{format(message.createdAt)}</div> */}
    //                       </div>
    //                     ) : (
    //                       <div className="flex flex-col items-start">
    //                         <span className="text-sm text-gray-600">Sender</span>
    //                         <div className="flex items-end">
    //                           <div ref={scroll} className="bg-blue-500 text-white p-2 rounded-lg max-w-xs">
    //                             {message.text}
    //                           </div>
    //                         </div>
    //                         {/* <div className="text-xs text-gray-600 self-start mt-1">{format(message.createdAt)}</div> */}
    //                       </div>
    //                     )}
    //                   </div>
    //                 ))}
    //             </div>
    //           </div>
    //           <div className="bg-white p-4 flex-shrink-0 sticky bottom-0 z-10">
    //             <div className="flex">
    //               <input
    //                 type="text"
    //                 placeholder="Type a message..."
    //                 className="flex-1 border rounded-full p-2 mr-2"
    //                 onChange={handleChange}
    //                 value={newMessage}
    //               />
    //               <button className="bg-blue-500 text-white p-2 rounded-full" onClick={handleClick}>
    //                 Send
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : (
    //     <div className="flex justify-center items-center h-screen ">
    //       <p className="text-2xl">
    //         <span className="text-gray-500">Tap on chat to start the conversation.</span>
    //       </p>
    //     </div>
    //   )}
    // </>
  );
}
