import React, {ChangeEvent} from 'react';
import s from './Counter.module.css'

type PropsType = {
    max: number
    min: number
    error: boolean
    setMax: (max: number) => void
    setMin: (min: number) => void
    setEditMode: (isEditModeOn: boolean) => void
}

export const CounterDisplaySettings:React.FC<PropsType> = ({max, min, setMax, setMin, setEditMode, error}) => {

    const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMax(event.currentTarget.value && JSON.parse(event.currentTarget.value))
        setEditMode(true);

    }
    const onChangeMinHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMin(event.currentTarget.value && JSON.parse(event.currentTarget.value))
        setEditMode(true);
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

