import React, { Component, useEffect, useState } from 'react';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/contants';
import { json } from 'react-router-dom';
import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
const [searchQuery, setSearchQuery] = useState("");
const [suggestions,setSuggestions] = useState([]);
const[showSuggestions, setshowSuggestions]=useState(false);

const searchcache = useSelector((store)=> store.search);
const dispatch = useDispatch();
//console.log(searchQuery);
useEffect(()=>{
//API CALL
//console.log(searchQuery);
//make an api call after every key press
//but if the diff between 2 api calls is <200 ms
//decline the api call
const timer=setTimeout(()=>getSearchSuggestions(),200);
if(searchcache[searchQuery]){
  setSuggestions(searchcache[searchQuery]);
} else{
  getSearchSuggestions();
}

//clearing the timer
return ()=>{
  clearTimeout(timer);
};

},[searchQuery])

const getSearchSuggestions = async ()=>{
  console.log("API CALL"+ searchQuery);
  const data= await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json= await data.json();
  //console.log(json[1]);
  setSuggestions(json[1]);
  //update cache
 dispatch(cacheResults({
  [searchQuery] : json[1],
 }));
};

const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  };

  return (
  <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
    <div className='flex col-span-1'>
        <img 
        onClick={()=> toggleMenuHandler()}
        className='h-6 cursor-pointer'
        alt="menu"
        src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
        />
        <a herf="/">
        <img 
        className='h-6 mx-2'
        alt="youtube" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzI0TyUGoWZxPHcOoS0SaIYk86un_V7f7IWXwQkAcXBv-4MMs"
        />
        </a>
    </div>
    <div className='col-span-10 text-center'>
      <div>
        <input className='w-1/2 rounded-l-full border-gray-400 p-2' 
        type="text"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=> setshowSuggestions(true)}
        onBlur={()=>setSuggestions(false)}
        
        />
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
       {showSuggestions && Array.isArray(suggestions) && 
       (<div className='fixed bg-white py-2 px-5 w-[51.25rem] shadow-lg rounded-lg border-gray-50'>
          <ul>
            {
            suggestions.map((s)=>{return <li key={s}className='py-2 shadow-sm hover:bg-slate-200'> 👁{s}</li>
             } )}
            {/* <li className='py-2 shadow-sm hover:bg-slate-200'>I</li> */}
         </ul>
      </div>
      )}
    </div>
    <div className='col-span-1'>
        <img 
        alt="user" 
        className='h-5'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-umWad93MGg29rt6KpquK3vSQBFjT1zcXThCCSzQ&s"/>
    </div>
  </div>
  );
};

export default Head;