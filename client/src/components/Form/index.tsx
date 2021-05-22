import React, { FormEvent } from 'react';
import { Input } from '../Input';
import {FormContainer} from './styles'

const  Form:React.FC = () =>{
    function Handcreateclasses(e:FormEvent){
        e.preventDefault();
    }
    return(
        <FormContainer>
            <form action="" onSubmit={Handcreateclasses}>
                <Input label={"digite seu nome"} name={"name"}/>
                <Input label={"digite seu email"} name={"email"}/>
                <Input label={"digite sua senha"} name={"password"}/>
            </form>
        </FormContainer>
    )
}

export {Form}