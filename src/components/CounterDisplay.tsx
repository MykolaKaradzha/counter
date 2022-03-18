import React from 'react';
import s from './Counter.module.css'

type PropsType = {
    count: number
}

export const CounterDisplay:React.FC<PropsType> = ({count}) => {
    const finalClass = count== 5 ? `${s.maxNumber} ${s.display}` : s.display
    return (
        <div className={finalClass}>
            {count}
        </div>
    );
};

