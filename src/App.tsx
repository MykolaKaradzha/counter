import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {CounterSettings} from "./components/CounterSettings";
import {Button} from "./components/UniversalButton";
import s from './components/Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";

import {
    addCountAC,
    resetCountAC,
    setAlternativeAC,
    setEditModeAC,
    setMaxValueAC,
    setMinValueAC
} from "./redux/counter-reducer";


function App() {
    // const [count, setCount] = useState<number>(0)
    // const [max, setMax] = useState<number>(0)
    // const [min, setMin] = useState<number>(0)
    // const [isEditModeOn, setEditMode] = useState<boolean>(false)
    // const [alternativeOn, setAlternative] = useState<boolean>(false)

    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const max = useSelector<AppStateType, number>(state => state.counter.max)
    const min = useSelector<AppStateType, number>(state => state.counter.min)
    const isEditModeOn = useSelector<AppStateType, boolean>(state => state.counter.isEditModeOn)
    const isAlternativeOn = useSelector<AppStateType, boolean>(state => state.counter.isAlternativeOn)
    const dispatch = useDispatch()

    const addCount = () => {
        count < max && dispatch(addCountAC())
    }
    const editExtremumValue = (newValue: number, extremumType: string) => {
        extremumType === 'max'
            ? dispatch(setMaxValueAC(newValue))
            : dispatch(setMinValueAC(newValue))
    }
    const resetCount = () => {
        dispatch(resetCountAC())
    }

    const setEditMode = (isEditModeOn: boolean) => {
        dispatch(setEditModeAC(isEditModeOn))
    }

    const setSettings = () => {
        // addToLocalStorageSettings();
        resetCount();
        dispatch(setEditModeAC(false))
    }
    const setAlternativeMode = () => {
        dispatch(setAlternativeAC())
    }

    const editModeOnClass = `${isEditModeOn ? s.editMode : ''}`;
    const editModeOffClass = `${isEditModeOn ? '' : s.editMode}`;
    const counterClass = isAlternativeOn ? '' : editModeOnClass;
    const settingsClass = isAlternativeOn ? '' : editModeOffClass;
    const error = min >= max || min < 0;

    // const addToLocalStorageSettings = () => {
    //     localStorage.setItem("max", JSON.stringify(max))
    //     localStorage.setItem("min", JSON.stringify(min))
    // }
    //
    // useEffect(() => {
    //     const maxAsString = localStorage.getItem("max")
    //     const minAsString = localStorage.getItem("min")
    //     if (maxAsString && minAsString) {
    //         setMax(JSON.parse(maxAsString))
    //         setMin(JSON.parse(minAsString))
    //     }
    // }, [])
    //



    return (
        <div className="App">
            <Button className={s.switchButton} onClick={setAlternativeMode}>Switch</Button>
            <div className={s.counterWrapper}>
                <CounterSettings editExtremumValue={editExtremumValue} error={error}
                                 max={max} min={min} setSettings={setSettings}
                                 className={settingsClass}/>
                <Counter count={count} addCount={addCount} resetCount={resetCount}
                         isEditModeOn={isEditModeOn} setEditMode={setEditMode} isAlternativeOn={isAlternativeOn}
                         max={max} min={min} error={error} className={counterClass}/>
            </div>
        </div>
    );
}

export default App;
