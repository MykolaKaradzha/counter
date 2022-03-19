import React from 'react';
import s from "./Counter.module.css"
import {Button} from "./UniversalButton";

type PropsType = {
    error: boolean
    setSettings: () => void
    setEditMode: (isEditModeOn: boolean) => void
}

export const CounterButtonsSettings:React.FC<PropsType> = ({setSettings, setEditMode, error}) => {
    const onClickSetHandler = () => {
        if (!error) {
            setSettings();
            setEditMode(false);
        }
    }
    return (
        <div className={s.buttonsPanel}>
            <Button onClick={onClickSetHandler} disabled={error}>SET</Button>
        </div>
    );
};

