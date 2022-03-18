import React from 'react';
import {CounterButtons} from "./CounterButtons";
import {CounterDisplay} from "./CounterDisplay";
import s from './Counter.module.css'

type PropsType = {
    count: number
    adding: () => void
    resetting: () => void
    MAXNUMBER:number
    STARTINGNUMBER:number
}



export const Counter:React.FC<PropsType> = ({count, adding, resetting, MAXNUMBER, STARTINGNUMBER}) => {

    return (
        <div className={s.counter}>
            <CounterDisplay count={count}/>
            <CounterButtons count={count} adding={adding} resetting={resetting} MAXNUMBER={MAXNUMBER} STARTINGNUMBER={STARTINGNUMBER}/>
        </div>
    );
};

