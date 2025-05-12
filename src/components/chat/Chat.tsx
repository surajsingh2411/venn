import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Function to handle sending the user message and setting up the chat with SSE for responses
  const handleSend = async () => {
    if (message.trim()) {
      const userMessage: Message = { role: 'user', content: message.trim() };
      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      // Send the user message to the backend to trigger the tool (e.g., AI, etc.)
      await fetch('http://localhost:3001/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message.trim() }),
      });

      // Clear the message input after sending
      setMessage('');
    }
  };
  useEffect(() => {
    let retryTimeout: ReturnType<typeof setTimeout>

    const connectToStream = () => {
      const source = new EventSource('http://localhost:3001/stream');

      source.onmessage = (event) => {
        const text = event.data;
        const assistantMessage: Message = { role: 'assistant', content: text };
        setMessages(prev => [...prev, assistantMessage]);
        setIsTyping(false);
      };

      source.onerror = (event) => {
        console.error('Error with EventSource:', event);

        // Check if event.target is not null and its readyState is closed
        if (event.target && (event.target as EventSource).readyState === EventSource.CLOSED) {
          // Retry the connection if the EventSource is closed
          retryTimeout = setTimeout(connectToStream, 3000);
        }
      };

      return source;
    };

    const source = connectToStream();

    return () => {
      clearTimeout(retryTimeout);
      source.close();
    };
  }, []);


  return (
    <div>
      <div className="font-bold text-center mt-2">
        VENN
      </div>
      <div className="flex flex-col h-full max-w-4xl mx-auto mt-10 space-y-4">
        <MessageList messages={messages} />
        {isTyping && <TypingIndicator />}
        <ChatInput message={message} setMessage={setMessage} onSend={handleSend} />
      </div>

    </div>
  );
};

export default Chat;
