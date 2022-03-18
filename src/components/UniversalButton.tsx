import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './Counter.module.css'

type DefaultButtonAttr = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type PropsType = DefaultButtonAttr

export const Button:React.FC<PropsType> = ({className, ...restProps}) => {
    const finalClassName = `${s.button} ${className}`
    return (
        <div>
            <button  className={finalClassName} {...restProps}></button>
        </div>
    );
};

