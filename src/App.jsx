import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-800 to-blue-900 flex flex-col items-center">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-extrabold text-center text-white mb-8 tracking-wider drop-shadow-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Image Search App
          </span>
        </h1>
        <div className="max-w-2xl w-full mx-auto backdrop-blur-sm bg-white/10 rounded-xl p-6 shadow-2xl">
          <SearchBar onSubmit={handleSubmit} />
        </div>
        <div className="mt-12 w-full">
          <ImageList images={images} />
        </div>
      </div>
    </div>
  );
}

export default App;
