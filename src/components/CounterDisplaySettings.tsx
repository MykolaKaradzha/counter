import React, {ChangeEvent} from 'react';
import s from './Counter.module.css'

type PropsType = {
    max: number
    min: number
    error: boolean
    editExtremumValue: (newValue: number, extremumType: string) => void

}

export const CounterDisplaySettings:React.FC<PropsType> = ({max, min, editExtremumValue, error}) => {

    const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        editExtremumValue(event.currentTarget.value && JSON.parse(event.currentTarget.value), 'max')


    }
    const onChangeMinHandler = (event: ChangeEvent<HTMLInputElement>) => {
        editExtremumValue(event.currentTarget.value && JSON.parse(event.currentTarget.value), 'min')

    }
    const inputClass = `${s.defaultInput} ${error ? s.errorInput : ''}`
    return (
        <div className={`${s.display} ${s.container}`}>
                <div>MAX VALUE:
                    <input type={"number"} value={max}
                                      onChange={onChangeMaxHandler} className={inputClass}/></div>
                <div>START VALUE:
                    <input type={"number"} value={min}
                                        onChange={onChangeMinHandler} className={inputClass}/></div>
        </div>
    );
};

