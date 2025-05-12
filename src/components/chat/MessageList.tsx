import React, { useEffect, useRef } from 'react';

const Chat = ({ messages }: { messages: { role: string; content: string }[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
   
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]); 

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-2 overflow-y-auto p-4 h-[80vh] bg-white rounded shadow"
    >
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`p-2 rounded max-w-[80%] ${
            msg.role === 'user' ? 'self-end bg-blue-100' : 'self-start bg-gray-100'
          }`}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
};

export default Chat;
