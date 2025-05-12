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
    <textarea
      className="w-full p-2 border rounded resize-none focus:outline-none focus:ring"
      rows={2}
      placeholder="Type a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default ChatInput;
