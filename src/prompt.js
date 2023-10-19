import React, { useState } from 'react';

const Prompt = () => {
  const [inputText, setInputText] = useState('');

  return (
    <div className="pr-4 flex items-center justify-center w-full">
      <div className="w-full relative">
        <div className="border border-gray-300 p-2 rounded-md">
          <div className="flex items-center relative">
            <span className="text-gray-600"></span>
              <textarea
                className="bg-transparent outline-none focus:outline-none w-full h-32 resize-none overflow-y-auto text-white"
                placeholder="Enter your text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              ></textarea>
              {inputText && (
                <button className="absolute right-2 bottom-2 bg-blue-600 text-white py-1 px-3 rounded-md">
                  Generate
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
