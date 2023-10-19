import React, { useState, useRef } from 'react';

const ImagePrompt = () => {
  const [image, setImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const deleteButtonRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setZoom(1); // Reset zoom when a new image is uploaded
    }
  };

  const handleDeleteImage = (e) => {
    if (!editMode && image) {
      e.stopPropagation(); // Prevent click on the image from interfering
      setImage(null);
    }
  };

  const handleZoomIn = () => {
    if (!editMode && zoom < 2) {
      setZoom(zoom + 0.1);
    }
  };

  const handleZoomOut = () => {
    if (!editMode && zoom > 0.5) {
      setZoom(zoom - 0.1);
    }
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleImageClick = () => {
    if (!editMode && !image) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full h-full p-4 border border-gray-300 rounded-lg shadow-md">
      <div
        className="relative w-full h-[80%] overflow-hidden border border-gray-300 rounded-lg cursor-pointer"
        ref={imageContainerRef}
        onClick={handleImageClick}
        style={{ backgroundColor: 'transparent' }}
      >
        {image ? (
          <div
            className="w-full h-full bg-center bg-no-repeat bg-cover relative"
            style={{
              backgroundImage: `url(${image})`,
              transform: `scale(${zoom})`,
              backgroundSize: 'contain', // Ensure the image is not cropped
              backgroundPosition: 'center',
            }}
          >
            {editMode && (
              <div
                className="absolute border border-red-500"
                style={{
                  left: cursorPosition.x + 'px',
                  top: cursorPosition.y + 'px',
                }}
              ></div>
            )}
            {image && !editMode && (
              <div
                ref={deleteButtonRef}
                className="fixed top-2 right-2"
              >
                <button
                  onClick={handleDeleteImage}
                  className="bg-gray-100 bg-opacity-40 p-1 rounded-full"
                  style={{
                    transform: `scale(1)`,
                    zIndex: 1,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-500">
            No image selected
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center">
      {image && (
        <button
          onClick={handleImageChange}
          className="text-sm bg-gray-300 text-gray-700 px-2 py-1 rounded-lg mr-2"
        >
          Change Image
        </button>
      )}
        <button
          onClick={handleZoomIn}
          className="text-sm bg-gray-300 text-gray-700 px-2 py-1 rounded-lg mr-2"
        >
          Zoom In
        </button>
        <button
          onClick={handleZoomOut}
          className="text-sm bg-gray-300 text-gray-700 px-2 py-1 rounded-lg mr-2"
        >
          Zoom Out
        </button>
        <button
          onClick={handleEditToggle}
          className={`text-sm bg-gray-300 text-gray-700 px-2 py-1 rounded-lg ${
            editMode ? 'bg-red-500' : ''
          }`}
        >
          {editMode ? 'Disable Editing' : 'Enable Editing'}
        </button>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        ref={fileInputRef}
      />
    </div>
  );
};

export default ImagePrompt;
