import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {CounterSettings} from "./components/CounterSettings";


function App() {
    const [count, setCount] = useState<number>(0)
    const [max, setMax] = useState<number>(5)
    const [min, setMin] = useState<number>(0)
    const [isEditModeOn, setEditMode] = useState<boolean>(false)

    const error = min >= max || min < 0;

    const addToLocalStorageSettings = () => {
        localStorage.setItem("max", JSON.stringify(max))
        localStorage.setItem("min", JSON.stringify(min))
    }
    const setSettings = () => {
        addToLocalStorageSettings();
        resetCount();
    }

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


    const addCount = () => {
        count < max && setCount(count + 1)
    }
    const resetCount = () => {
        setCount(min)
    }
    return (
        <div className="App">
            <CounterSettings setMax={setMax} setMin={setMin} error={error}
                             max={max} min={min} setSettings={setSettings} setEditMode={setEditMode}/>
            <Counter count={count} addCount={addCount} resetCount={resetCount} isEditModeOn={isEditModeOn}
                     max={max} min={min} error={error}/>
            {/*<button onClick={addToLocalStorage}>addToLocalStorage</button>*/}
            {/*<button onClick={getFromLocalStorage}>getFromLocalStorage</button>*/}
            {/*<button onClick={removeFromLocalStorage}>removeFromLocalStorage</button>*/}
            {/*<button onClick={clearFromLocalStorage}>clearFromLocalStorage</button>*/}
        </div>
    );
}

export default App;
