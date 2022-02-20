import React, { useState} from 'react';
import {Input} from "../../ui/input/input";
import {Checkbox} from "../../ui/Checkbox/checkbox";
import {Button} from "../../ui/button/button";
import {Select} from "../../ui/select/select";
import style from './password-generator.module.css'


function PasswordGenerator() {
    const passwordLenghtValue = [8,9,10,11,12,13,14,15, 16]
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const symbols = '!@#$%^&()_+?><:{}[]'

    const[result, setResult] = useState('')
    const[passwordLenght, setPasswordLenght] = useState(passwordLenghtValue[0])
    const[isSymbolsUse, setIsSymbolsUse] = useState(false)


    function handlePasswordGeneartion() {
        let currentResult = ''
        if(isSymbolsUse) {
            chars += symbols
        }

        for(let i = 0; i < passwordLenght; i += 1){
            const randomNumber = Math.floor(Math.random() * chars.length)
            currentResult += chars.substring(randomNumber, randomNumber + 1)
        }
        setResult(currentResult)
    }

    function handleBlur(event: any) {
        setPasswordLenght(event.target.value)
    }
    function handleSumbitUse () {
        setIsSymbolsUse(!isSymbolsUse)
    }
    function handlePasswordCopy() {
        if(result) {
            navigator.clipboard.writeText(result)
        }
    }

    return (
        <div>

            <div className={style.result}>
                <Input defaultValue={result} />
                <button className={style.copy} onClick={handlePasswordCopy}></button>
            </div>
            <Select options={passwordLenghtValue} onBlur={handleBlur}/>
            <Checkbox defaultChecked={false} id='symbols' onChange={handleSumbitUse}/>
            <Button type='button' onClick={handlePasswordGeneartion}/>
        </div>
    );
}

export default PasswordGenerator;
