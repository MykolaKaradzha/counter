import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {CounterSettings} from "./components/CounterSettings";
import {Button} from "./components/UniversalButton";
import s from './components/Counter.module.css'


function App() {
    const [count, setCount] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const [min, setMin] = useState<number>(0)
    const [isEditModeOn, setEditMode] = useState<boolean>(false)
    const [alternativeOn, setAlternative] = useState<boolean>(false)

    const editModeOnClass = `${isEditModeOn ? s.editMode : ''}`
    const editModeOffClass = `${isEditModeOn ? '' : s.editMode}`
    const counterClass = alternativeOn ? '' : editModeOnClass
    const settingsClass = alternativeOn ? '' : editModeOffClass

    const error = min >= max || min < 0;

    const addToLocalStorageSettings = () => {
        localStorage.setItem("max", JSON.stringify(max))
        localStorage.setItem("min", JSON.stringify(min))
    }

    useEffect(() => {
        const maxAsString = localStorage.getItem("max")
        const minAsString = localStorage.getItem("min")
        if (maxAsString && minAsString) {
            setMax(JSON.parse(maxAsString))
            setMin(JSON.parse(minAsString))
        }
    }, [])

    const setSettings = () => {
        addToLocalStorageSettings();
        resetCount();
    }

    const addCount = () => {
        count < max && setCount(count + 1)
    }
    const resetCount = () => {
        setCount(min)
    }
    const switchOnAlternativeMode = () => {
        setAlternative(!alternativeOn)
    }
    return (
        <div className="App">
            <Button className={s.switchButton} onClick={switchOnAlternativeMode}>Switch</Button>
            <div className={s.counterWrapper}>
                <CounterSettings setMax={setMax} setMin={setMin} error={error}
                                 max={max} min={min} setSettings={setSettings}
                                 setEditMode={setEditMode} className={settingsClass}/>
                <Counter count={count} addCount={addCount} resetCount={resetCount} setEditMode={setEditMode}
                         isEditModeOn={isEditModeOn}
                         max={max} min={min} error={error} className={counterClass}/>
            </div>
        </div>
    );
}

export default App;
