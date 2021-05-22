import React, { InputHTMLAttributes } from "react"
import { InputContainer } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
    name:string;
}

const Input:React.FC<InputProps> = (props,...rest) =>{
    return(
        <InputContainer>
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" id={props.name}{...rest} />
        </InputContainer>
    )
}

export {Input}