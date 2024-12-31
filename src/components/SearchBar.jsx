import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({onSubmit}) {

  const [term, setTerm] = useState('');


  // const handleClick = () => {
  //   onSubmit('cars');
  // }

  //function for handle the form data
  const handleFormSubmit = (event) => {
    event.preventDefault();
    //console.log('I need to tell the parent about some data');

    //NEVER EVER EVER DO THIS 
    //onSubmit(document.querySelector('input').value);

    onSubmit(term);
  }

  const handleChange = (event) => {
    //console.log(event.target.value);
    setTerm(event.target.value);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        Enter Your Search : {term}
        <br/>
      <input value={term} onChange={handleChange} />
      {/* {term.length < 3 && 'Term must be longer'} */}
      </form>  
      {/* <button onClick={handleClick}>
        Click me
      </button> */}
    </div>
  )
};
 