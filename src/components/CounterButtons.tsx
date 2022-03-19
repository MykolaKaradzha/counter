import React from 'react';
import s from "./Counter.module.css"
import {Button} from "./UniversalButton";

type PropsType = {
    adding: () => void
    resetting: () => void
    count: number
    max:number
    min:number
    isEditModeOn: boolean
    setEditMode: (isEditModeOn: boolean) => void
}

export const CounterButtons:React.FC<PropsType> = ({adding, resetting, count, min, max, setEditMode}) => {
    const onClickSetHandler = () => {
        setEditMode(true)
    }
    return (
        <div className={s.buttonsPanel}>
            <Button onClick={adding}
                    disabled={count === max ? true : false}>INC</Button>
            <Button onClick={resetting}
                    disabled={count === min ? true : false}>RESET</Button>
            <Button onClick={onClickSetHandler}>SET</Button>
        </div>
    );
};

