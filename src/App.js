import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {

  const[count,setCount]= useState(0);
  const[lastCount,setLastCount]= useState(0);

  useEffect(()=>{

    // setTimeout(()=>{
    //   setCount(count + 1);


    // },1000)
    console.log("useEffect triggered");
    return()=>{
      console.log("Cleanup function")
    }
    
    
  },[count]);

  const counter=()=>{
    setCount(count +1);
    if(count % 5 ===0){
      setLastCount(lastCount + 2);
      
    }

    
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          UseEffect Hook
        </p>
        <p>Count Value = {count}</p>
        <button onClick ={counter}>Click Me</button>
        <p>Count Value =  {lastCount} </p>
        
        
      </header>
    </div>
  );
}

export default App;
