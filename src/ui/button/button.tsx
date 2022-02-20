import React from 'react';
import style from './button.module.css'


type PropsType = {
    type: "button" | "submit" | "reset" | undefined
    onClick: () => void
}

export function Button(props: PropsType) {
    return <div>
        <button className={style.button}
                type={props.type}
                onClick={props.onClick}>Generate password
        </button>
    </div>
}