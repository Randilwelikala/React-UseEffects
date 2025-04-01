import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {

  const[count,setCount]= useState(0);

  useEffect(()=>{

    setTimeout(()=>{
      setCount(count + 1);


    },1000)
    
    
  },[count]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          UseEffect Hook
        </p>
        <p>Count Value = {count}</p>
        
        
      </header>
    </div>
  );
}

export default App;
