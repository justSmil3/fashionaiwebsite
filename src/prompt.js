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
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-full h-full relative">
        <div className="h-full border border-2 border-gray-600 rounded-2xl">
          <div className="flex items-center relative">
            <span className="text-gray-600"></span>
              <textarea
                className="bg-transparent outline-none focus:outline-none h-full w-full resize-none overflow-y-auto text-white p-4"
                placeholder="Enter your text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
