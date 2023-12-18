import React from "react";

const Sidebar = () => {
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
    </div>
  );
};

export default Sidebar;
