import React, {useState} from "react";

const ImageSearch = ({getTerm}) => {

    const [text, setText] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        getTerm(text);
        setText('')
        
    }

  return (
    <div className="max-w-sm mx-auto my-10 overflow-hidden rounded">
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto ">
        <div className="flex items-center py-2 border-b border-b-2 border-teal-500">
          <input
            type="text"
            placeholder="Search a picture"
            className="w-full px-6 py-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
            onChange={(e)=>setText(e.target.value)}
            value={text}
          />
          <button
            type="submit"
            className="flex-shrink-0 px-10 py-2 text-white transition duration-500 bg-green-500 hover:bg-red-500"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
