import React from 'react';
import s from './Counter.module.css'

type PropsType = {
    count: number
    max: number
    isEditModeOn: boolean
    error: boolean

}

export const CounterDisplay:React.FC<PropsType> = ({count, max, isEditModeOn, error}) => {
    const finalClass = count === max ? `${s.error} ${s.display}` : s.display
    const errorMessage = <div className={s.error}>Incorrect value!</div>
    const displayMessage = isEditModeOn ? <div className={s.editModeSpan}>enter values and press "set"</div>
        : count

    return (
        <div className={finalClass}>
            {
                (error) ? errorMessage : displayMessage
            }

        </div>
    );
};

