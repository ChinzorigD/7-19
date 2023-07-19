
import React, {useState} from 'react';
import './App.css';

function App() {

  const[element, setElement]=useState([]);
  const[zadlah, setZadlah]=useState('');
const addElement=()=>{
  const todosZadlah=[...element, zadlah]
  setElement(todosZadlah);
  setZadlah("")
  console.log(element)
}

const deleteElement=(index)=>{
  const filterItem=element.filter((_,el)=> el!==index);
  setElement(filterItem);
  alert(index+" индекстэй элемент устгагдсан.")
}
  return (
    <div className="App">
      <input placeholder='exp.'
      value={zadlah}
      onChange={(e)=>setZadlah(e.target.value)}/>
      <button onClick={addElement}>ADD</button>
      <div>
        {element.map((el, index)=>{
          return(
            <div key={index}>
              <h1>{el}</h1>
            <button onClick={()=>deleteElement(index)}>Delete</button>
            </div>
          )
          
        })}
      </div>
    </div>
    
  );
}

export default App;
