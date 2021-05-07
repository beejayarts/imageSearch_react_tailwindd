import React from "react";


const ImageCard = ({imagesFolder}) => {
  const {webformatURL, user, views, downloads, likes  } = imagesFolder;
  const tags = imagesFolder.tags.split(',');
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg ">
      <img src={webformatURL} className="object-cover w-full h-32 sm:h-52 hover:scale-50" alt="stuff from pixbay" />
      <div className="px-3 py-6 text-left bg-gray-900 text-content">
        <h3 className="mb-2 text-2xl font-semibold text-white">
          Photo by {user}
        </h3>
        <p className="text-gray-300">
          <strong>Views:</strong> {views}
        </p>
        <p className="text-gray-300">
          <strong>Downloads:</strong> {downloads}
        </p>
        <p className="text-gray-300">
          <strong>Likes:</strong> {likes}
        </p>

        <div className="mt-3">
      
         {tags.map((tag, i)=>(<button key={i} className="inline-block px-4 py-1 mr-2 text-sm text-white bg-red-500 rounded ">
            {tag}
          </button>))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
