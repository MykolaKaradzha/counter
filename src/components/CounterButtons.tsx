import React from 'react';
import s from "./Counter.module.css"
import {Button} from "./UniversalButton";

type PropsType = {
    adding: () => void
    resetting: () => void
    count: number
    MAXNUMBER:number
    STARTINGNUMBER:number
}

export const CounterButtons:React.FC<PropsType> = ({adding, resetting, count, STARTINGNUMBER, MAXNUMBER}) => {

    return (
        <div className={s.buttonsPanel}>
            <Button onClick={adding}
                    disabled={count === MAXNUMBER ? true : false} className={s.incButton}>INC</Button>
            <Button onClick={resetting}
                    disabled={count === STARTINGNUMBER ? true : false} className={s.resetButton}>RESET</Button>
        </div>
    );
};

