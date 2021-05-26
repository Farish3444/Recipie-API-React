import React,{useState,useEffect} from 'react';
import './App.css';

function App() {

  const YOUR_APP_ID='2d5b5e26';
  const YOUR_APP_KEY = 'cef5eba153be310ee103db351f152aed';
  const apiGet = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  useEffect(()=>{
  getData();
  },[]);

  const getData = async()=>{
    const response = await fetch(apiGet);
    const data = await response.json();
    console.log(data)
  }

  return (
    <div className="App">
      <h1>Recipie App</h1>
      <hr/>
      <input 
        type='text'
        placeholder='search here'
      />
      <br/>
      <button>submit</button>
    </div>
  );
}

export default App;
