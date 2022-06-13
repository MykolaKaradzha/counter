import React from 'react';
import s from "./Counter.module.css";
import {CounterDisplaySettings} from "./CounterDisplaySettings";
import {CounterButtonsSettings} from "./CounterButtonsSettings";

type PropsType = {
    max: number
    min: number
    error: boolean
    editExtremumValue: (newValue: number, extremumType: string) => void
    setSettings: () => void
    className: string

}

export const CounterSettings:React.FC<PropsType> = ({max, min, editExtremumValue,
                                                         setSettings,
                                                        error, className}) => {
    return (
        <div className={`${s.counter} ${className}`}>
            <CounterDisplaySettings editExtremumValue={editExtremumValue} max={max} min={min} error={error}/>
            <CounterButtonsSettings setSettings={setSettings} error={error}/>
        </div>
    );
};

