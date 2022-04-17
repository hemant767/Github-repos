import { useState } from "react";

import "./Card.css"; 
const Search = ({setLang}) => {
  const [value,setValue]= useState()
  const handleChange=(event)=> {
     setValue (event.target.value);
  }
  return(
    <>
  <input placeholder="Search here" className = "search" type="Search" onChange={handleChange}/>
  <button onClick={()=> setLang(value)}>Search</button>
  </>
  
  )
   
};

export default Search;
