import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";



function App() {
    const [count, setCount] = useState<number>(0)
    // const addToLocalStorage = () => {
    //     localStorage.setItem("CounterValue", JSON.stringify(count))
    // }
    // const getFromLocalStorage = () => {
    //     const countAsString = localStorage.getItem("CounterValue")
    //     countAsString && setCount(JSON.parse(countAsString))
    // }
    // const removeFromLocalStorage = () => {
    //     localStorage.removeItem("CounterValue")
    // }
    // const clearFromLocalStorage = () => {
    //     localStorage.clear()
    //     setCount(0)
    // }
    const MAXNUMBER = 5;
    const STARTINGNUMBER = 0;


    const adding = () => {
        count< MAXNUMBER && setCount(count+1)
    }
    const resetting = () => {
        setCount(STARTINGNUMBER)
    }
  return (
    <div className="App">
      <Counter count={count} adding={adding} resetting={resetting}
               MAXNUMBER={MAXNUMBER} STARTINGNUMBER={STARTINGNUMBER}/>
        {/*<button onClick={addToLocalStorage}>addToLocalStorage</button>*/}
        {/*<button onClick={getFromLocalStorage}>getFromLocalStorage</button>*/}
        {/*<button onClick={removeFromLocalStorage}>removeFromLocalStorage</button>*/}
        {/*<button onClick={clearFromLocalStorage}>clearFromLocalStorage</button>*/}
    </div>
  );
}

export default App;
