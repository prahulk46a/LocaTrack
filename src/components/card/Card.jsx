import React, { useState } from "react";

const UserCard = ({ image, name, age, description, onUpdate, onDelete }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="max-w-full mx-5 my-2 bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
      <div className="flex">
        {/* Left side: Image */}
        <div className="w-50">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>

        {/* Right side: User details */}
        <div className="w-2/3 p-4">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">Age: {age}</p>
          <p className="mt-2 text-gray-700">
            {description.length > 200 && !showFullDescription
              ? `${description.slice(0, 200)}...`
              : description}
            {description.length > 200 && (
              <button
                onClick={toggleDescription}
                className="ml-2 text-blue-500 hover:underline focus:outline-none"
              >
                {showFullDescription ? "Show Less" : "Show More"}
              </button>
            )}
          </p>

          <div className="flex mt-4 space-x-3">
            <button
              onClick={onUpdate}
              className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              Update
            </button>
            <button
              onClick={onDelete}
              className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md focus:outline-none focus:ring focus:ring-red-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
