import React from 'react';
import style from './input.module.css'

type InputPropsType = {
    defaultValue: string
}

export function Input(props: InputPropsType) {
    return <div>
        <input
            disabled={true}
            type="text"
            className={style.input}
            defaultValue={props.defaultValue}
        ></input>
    </div>
}