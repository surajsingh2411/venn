// src/components/chat/TypingIndicator.tsx
import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="self-start px-2 py-1 text-gray-500">
      <span className="animate-bounce inline-block w-2 h-2 bg-gray-400 rounded-full mr-1"></span>
      <span className="animate-bounce inline-block w-2 h-2 bg-gray-400 rounded-full mr-1 delay-150"></span>
      <span className="animate-bounce inline-block w-2 h-2 bg-gray-400 rounded-full delay-300"></span>
    </div>
  );
};

export default TypingIndicator;
