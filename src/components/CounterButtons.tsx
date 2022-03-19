import React from 'react';
import s from "./Counter.module.css"
import {Button} from "./UniversalButton";

type PropsType = {
    adding: () => void
    resetting: () => void
    count: number
    max:number
    min:number
}

export const CounterButtons:React.FC<PropsType> = ({adding, resetting, count, min, max}) => {

    return (
        <div className={s.buttonsPanel}>
            <Button onClick={adding}
                    disabled={count === max ? true : false} className={s.incButton}>INC</Button>
            <Button onClick={resetting}
                    disabled={count === min ? true : false} className={s.resetButton}>RESET</Button>
        </div>
    );
};

