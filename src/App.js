import React, { useState, useEffect } from "react";
import "./App.css";
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="mx-auto max-w-7xl">
      {/* search form component starts */}
      <ImageSearch getTerm={(text) => setTerm(text)} />

      {/* image components starts */}

      {!isLoading && images.length === 0 && (
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Bros, na rubbish you type so abeg
        </h1>
      )}
      {isLoading ? (
        <h3 className="text-4xl font-bold text-center text-gray-800">
          Loading...
        </h3>
      ) : (
        <div className="flex flex-wrap justify-center max-w-full gap-4 py-20 mx-auto mt-20 bg-gray-100">
          {images.map((img) => {
            return <ImageCard imagesFolder={img} key={img.id} />;
          })}
        </div>
      )}

      <footer className='py-6 mt-3 text-xl font-bold text-center text-white bg-green-600 capitalise'>Created with love by Beejayarts</footer>
    </div>
  );
}

export default App;
