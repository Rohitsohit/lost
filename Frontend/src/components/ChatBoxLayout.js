import React, { useEffect, useRef, useState } from 'react'
import { format } from "timeago.js";
import { addMessage, getMessages } from '../actions/chatActions';
import { getUserDetails } from '../actions/auth';
export default function ChatBoxLayout({ chat, loggedInUser, setSendMessage, receivedMessage }) {

    const [reciverDetails, setReciverDetails] = useState();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const scroll = useRef();

    useEffect(() => {
        if (chat) {
            const userId = chat.members.find((id) => id !== loggedInUser);
            fetchUserDetails(userId);
        }
    }, [chat]);

    const fetchUserDetails = async (id) => {
        // const data = await getUserDetails(id);
        // setReciverDetails(data);
    };

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                // const data = await getMessages(chat._id);
                // setMessages(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (chat !== null) fetchMessages();
    }, [chat]);

    const handleChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleClick = async (e) => {
        e.preventDefault();

        if (!newMessage.trim()) {
            return;
        }

        const textMessage = {
            senderId: loggedInUser,
            text: newMessage,
            chatId: chat._id,
        };

        const receiverId = chat.members.find((id) => id !== loggedInUser);

        setSendMessage({ ...textMessage, receiverId });

        try {
            // const data = await addMessage(textMessage);
            // setMessages([...messages, data]);
            setNewMessage("");
        } catch {
            console.log("error");
        }
    };

    useEffect(() => {
        if (receivedMessage != null && receivedMessage.chatId === chat._id) {
            setMessages([...messages, receivedMessage]);
        }
    }, [receivedMessage]);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div>ChatBoxLayout</div>
    )
}
