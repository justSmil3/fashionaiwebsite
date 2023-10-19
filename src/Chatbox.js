import React, { useState, useEffect } from 'react';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    // Simulate a response from a bot after a delay (you can replace this with your actual logic)
    setTimeout(() => {
      setMessages([...messages, { text: 'This is a bot response', sender: 'bot' }]);
    }, 1000);
  };

  useEffect(() => {
    // Scroll to the bottom of the chatbox when new messages arrive
    const chatbox = document.getElementById('chatbox');
    chatbox.scrollTop = chatbox.scrollHeight;
  }, [messages]);

  return (
    <div className="bg-white w-80 h-96 shadow-lg rounded-lg p-4">
      <div id="chatbox" className="h-4/5 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`rounded-lg p-2 ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white float-right'
                  : 'bg-gray-200 text-black float-left'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="h-1/5 flex items-center">
        <input
          type="text"
          className="w-4/5 px-2 py-1 border border-gray-300 rounded-full outline-none"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
        />
        <button
          className="w-1/5 bg-blue-500 text-white rounded-full ml-2 py-2 px-4"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;