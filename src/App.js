import React, {useState,useEffect} from 'react';
import './App.css';
import Button from './Button';

function App () {
  const [ct,setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(ct => ct+1)
    },100)
    // return () => clearInterval(interval);
  },[])
  if (ct == 10) {
    setCount(100)
  }
  return (
    <div className="App">
      <header><h1>Wave {ct} Editor</h1></header>
      <Button/>
      <p></p>
    </div>
  );
}

export default App;
