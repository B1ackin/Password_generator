import React, {ChangeEvent, FocusEventHandler} from 'react';


type SelectPropsType = {
    options: Array<number>
    onBlur: (FocusEventHandler<HTMLSelectElement>)
}

export function Select(props: SelectPropsType) {

    return <div>
        <span>Количество символов</span>
        <select onBlur={props.onBlur}>
            {
                props.options.map((option, index) => {
                    return <option key={index}>{option}</option>
                })
            }
        </select>
    </div>
}