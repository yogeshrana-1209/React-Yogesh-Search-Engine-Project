import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
import { use } from 'react';

function App() {

  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    //console.log('Do a search with',term);
    const result = await searchImages(term);
    setImages(result);
    //console.log(result);
  };

  return (
    <>
      <div>
        App
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />
      </div>
    </>
  )
}

export default App
