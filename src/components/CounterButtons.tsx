import React from 'react';
import s from "./Counter.module.css"
import {Button} from "./UniversalButton";

type PropsType = {
    adding: () => void
    resetting: () => void
    count: number
    max:number
    min:number

    setEditMode: (isEditModeOn: boolean) => void
    isAlternativeOn:boolean

}

export const CounterButtons:React.FC<PropsType> = ({
                                                       adding, resetting, count,
                                                       min, max,
                                                        setEditMode, isAlternativeOn
}) => {
    const onClickSetHandler = () => {
        setEditMode(true)
    }
    const SetButtonClass = isAlternativeOn ? s.editMode : ''
    return (
        <div className={s.buttonsPanel}>
            <Button onClick={adding}
                    disabled={count === max}>INC</Button>
            <Button onClick={resetting}
                    disabled={count === min}>RESET</Button>
            <Button onClick={onClickSetHandler} className={SetButtonClass}>SET</Button>
        </div>
    );
};

