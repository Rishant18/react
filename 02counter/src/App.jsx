import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
         
  let [counter,newcounter] =useState(15);

      
     const addvalue = () =>{
      if(counter<=19)
      newcounter(counter +1)
    else{
       alert("limit succeed")
    }
      
     }

     const removevalue=()=>{
      if(counter>=1)
      newcounter(counter-1)
    else{
       alert("limit succeed")
    }
   
     }


  return (
    <>
      <h1> react</h1>
      <h2> counter value {counter}</h2>
       <button onClick={addvalue}>add value by : 1 </button><br></br>
       <button onClick={removevalue}> remove value by: 1</button>
    </>
  )
}

export default App
