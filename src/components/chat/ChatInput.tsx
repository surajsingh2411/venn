import React, { useState } from 'react';

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  onSend: () => void;
}

const ChatInput: React.FC<Props> = ({ message, setMessage, onSend }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        onSend();
      }
    }
  };

  return (
  

    <div className="relative w-full">
  <textarea
    className="w-full p-2 pr-20 border rounded resize-none focus:outline-none focus:ring"
    rows={2}
    placeholder="Type a message..."
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    onKeyDown={handleKeyDown}
  />
  
  <button
    onClick={onSend}
    className="absolute right-2 mt-[15px] px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
  >
    Send
  </button>
</div>
  );
};

export default ChatInput;
