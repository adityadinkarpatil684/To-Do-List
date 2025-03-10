// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'
 import { useState } from 'react';

function App() {
  const [inputval,setval]=useState("");
  const [task,settask]=useState([]);

  const HandleSubmit=(e)=>{
    e.preventDefault();
    if(!inputval){
      return;
    }
    if(!task.includes(inputval)){
    settask((previous) => [...previous, inputval]);
    setval("");
  }
  else{
    setval("");
  }
  }
  const HandleChange=(val)=>{
    setval(val);
  }
  const HandleDelete = (new_task)=>{
    const updatedtask=task.filter((currentask)=>(currentask!=new_task))
    settask(updatedtask);
  }

  const Handleclear=()=>{
    settask([]);
  }

  return <>
  <h1>TO-DO-LIST</h1>
  <form onSubmit={HandleSubmit}>
    <input type="text" value={inputval} onChange={(e)=>HandleChange(e.target.value)}/>
    <button type="submit">ADD</button>
  </form>
  <section>
  <ul>
  {task.map((eachtask, index) => (
    <li key={index}>{eachtask}
    <button className="done">DONE</button>
    <button onClick={()=>HandleDelete(eachtask)} className="delete" >DELETE</button>
    </li>
  ))}
</ul>
  </section>
  <div>
    <button onClick={()=>Handleclear()}  className="clear">CLEAR</button>
  </div>
  </>
}

export default App
