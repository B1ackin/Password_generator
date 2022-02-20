import React from 'react';

type CheckboxType = {
    id: string,
    defaultChecked: boolean,
    onChange: () => void
}


export function Checkbox(props: CheckboxType) {
    return <div>
        <span>Нужны ли спецсимволы?</span>
        <input type="checkbox"
               defaultChecked={props.defaultChecked}
               onChange={props.onChange}
               id={props.id}>
        </input>

    </div>
}