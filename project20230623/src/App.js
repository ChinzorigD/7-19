
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

 
//Өнөөдрийн хичээлээр useState үзнэ.

function App() {

//setData тухайн өгөгдлийн шинж чанарыг гаргаж ирнэ.
//Түүний дараа data руу өгөгдөл орж ирнэ.
//Үйлдлийн хязгаарлалт бол функц юм.

const[dataItems, setDataItems]=useState([])
const[getData, setGetData]=useState([])
const[searchInput, setSearchInput]=useState('')
axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((el)=>setDataItems(el.data))
  .catch((err)=>console.log(err))

 // console.log(dataItems);

 const searchItems=(e)=>{
   const queryItems=e.target.value
   setSearchInput(queryItems)
   const filterItems=getData.filter((item)=>{

    item.title.toLowerCase().includes(queryItems.toLowerCase())
   })

   setGetData(filterItems)

 }

  return (
<div className="App"> 
  <input type="text" placeholder='exp' onChange={searchItems}></input>
     {
      dataItems.map((el)=> {
        return(

        <div key={el.id}>
          <h3>{el.title}</h3>
        </div>
        )
      })
     }
     
      </div>
  );
}
export default App
