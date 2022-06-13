import React from 'react';
import {CounterButtons} from "./CounterButtons";
import {CounterDisplay} from "./CounterDisplay";
import s from './Counter.module.css'

type PropsType = {
    count: number
    max:number
    min:number
    error: boolean
    addCount: () => void
    resetCount: () => void
    isEditModeOn: boolean
    isAlternativeOn:boolean
    setEditMode: (isEditModeOn: boolean) => void
    className: string

}



export const Counter:React.FC<PropsType> = ({count, addCount,
                                                resetCount, max, min,
                                                isEditModeOn, error, setEditMode, className, isAlternativeOn}) => {

    return (
        <div className={`${s.counter} ${className}`}>
            <CounterDisplay count={count} isEditModeOn={isEditModeOn} max={max} error={error}/>
            <CounterButtons count={count} adding={addCount}
                            resetting={resetCount} max={max}
                            min={min} setEditMode={setEditMode} isAlternativeOn={isAlternativeOn}/>
        </div>
    );
};

