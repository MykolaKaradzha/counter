import React from 'react';
import s from "./Counter.module.css";
import {CounterDisplaySettings} from "./CounterDisplaySettings";
import {CounterButtonsSettings} from "./CounterButtonsSettings";

type PropsType = {
    max: number
    min: number
    error: boolean
    setMax: (max: number) => void
    setMin: (min: number) => void
    setSettings: () => void
    setEditMode: (isEditModeOn: boolean) => void
    className: string

}

export const CounterSettings:React.FC<PropsType> = ({max, min, setMax,
                                                        setMin, setSettings, setEditMode,
                                                        error, className}) => {
    return (
        <div className={`${s.counter} ${className}`}>
            <CounterDisplaySettings setMax={setMax} setMin={setMin} max={max} min={min} error={error} setEditMode={setEditMode}/>
            <CounterButtonsSettings setSettings={setSettings} setEditMode={setEditMode} error={error}/>
        </div>
    );
};

