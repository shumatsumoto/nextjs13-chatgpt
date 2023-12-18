"use client";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { db } from "../../../firebase";

const Sidebar = () => {
  useEffect(() => {
    const fetchRooms = async () => {
      const roomCollectionRef = collection(db, "rooms");
      const q = query(roomCollectionRef, orderBy("createdAt"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newRooms = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(newRooms);
      });
    };
  }, []);

  return (
    <div className="h-full overflow-y-auto px-5 flex flex-col bg-pink-400">
      <div className="flex-grow">
        <div className="cursor-pointer flex justify-evenly items-center border mt-2 rounded-md hover:bg-pink-500 duration-150">
          <span className="text-white p-4 text-2xl">+</span>
          <h1 className="text-white text-lg font-semibold p-4">New Chat</h1>
        </div>
        <ul>
          <li className="cursor-pointer border-b text-slate-100 hover:bg-pink-500">
            Room1
          </li>
          <li className="cursor-pointer border-b text-slate-100 hover:bg-pink-500">
            Room2
          </li>
          <li className="cursor-pointer border-b text-slate-100 hover:bg-pink-500">
            Room3
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-evenly text-lg mb-2 cursor-pointer p-4 text-slate-100 hover:bg-pink-500">
        <IoLogOutOutline />
        <span className="pl-2">ログアウト</span>
      </div>
    </div>
  );
};

export default Sidebar;
