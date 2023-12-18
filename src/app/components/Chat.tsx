import React from "react";

const Chat = () => {
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
        />
      </div>
    </div>
  );
};

export default Chat;
