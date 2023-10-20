import React, { useState } from 'react';

const Prompt = () => {
  const [inputText, setInputText] = useState('');
  const [imageSrc, setImageSrc] = useState(null);

  const api_url = 'http://127.0.0.1:7861/sdapi/v1/txt2img';

  const handleSubmit = () => {
    // Create a JSON object with the text data
    const data = {
      "prompt": inputText + ", realism, photorealism, full body",
      "negative_prompt": "deformed, 2 people",
      "steps": 50
    };
    setInputText(JSON.stringify(data));
    // Send a POST request to the API
    fetch(api_url, {
      method: 'POST',
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.status === 200) {
        return response.blob();
      } else {
        throw new Error('API request failed with status code: ' + response.status);
      }
    })
    .then(imageBlob => {
      // Convert the image blob to a data URL and set it in the state
      
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(imageBlob);
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div className="flex items-center justify-center w-full">
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
                <button onClick={handleSubmit} className="absolute right-2 bottom-2 bg-blue-600 text-white py-1 px-3 rounded-md">
                  Generate
                </button>
              )}
              {imageSrc && (<img src={imageSrc} alt="Generated Image" />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
