"use client";

import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { db } from "../../../firebase";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useAppContext } from "@/context/AppContext";
import { log } from "console";

type Message = {
  text: string;
  sender: string;
  createdAt: Timestamp;
};

const Chat = () => {
  const { selectedRoom } = useAppContext();
  const [inputMessage, setInputMessage] = useState<string>("");
  const [messages, setMessages] = useState<string>([]);

  useEffect(() => {
    if (selectedRoom) {
      const fetchMessages = async () => {
        const roomDocRef = doc(db, "rooms", selectedRoom);
        const messageCollectionRef = collection(roomDocRef, "messages");
        const q = query(messageCollectionRef, orderBy("createdAt"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const newMessages = snapshot.docs.map((doc) => doc.data() as Message);
          setMessages(newMessages);
          console.log(messages);
        });
        return () => {
          unsubscribe();
        };
      };

      fetchMessages();
    }
  }, [selectedRoom]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    const messageData = {
      text: inputMessage,
      sender: "user",
      createdAt: serverTimestamp(),
    };

    // メッセージをFirestoreに保存
    const roomDocRef = doc(db, "rooms", "");
    const messageCollectionRef = collection(roomDocRef, "messages");
    await addDoc(messageCollectionRef, messageData);
  };

  return (
    <div className="bg-gray-200 h-full p-4 flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Room1</h2>
      <div className="flex-grow overflow-y-auto mb-4">
        <div className="text-right">
          <div className="bg-pink-400 inline-block rounded px-4 py-2 mb-2">
            <p className="text-white font-medium">Hello</p>
          </div>
        </div>
        <div className="text-left">
          <div className="bg-green-400 inline-block rounded px-4 py-2 mb-2">
            <p className="text-white font-medium">How are you?</p>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 relative">
        <input
          type="text"
          placeholder="Send a Message"
          className="border-2 rounded w-full pr-10 focus:outline-none p-2"
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button
          className="absolute right-4 flex items-center inset-y-0"
          onClick={() => sendMessage()}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chat;
