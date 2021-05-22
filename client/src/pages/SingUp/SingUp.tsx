import { FormEvent, useState } from "react";
import { Header } from "../../components/Header";
import { ButtonForm, ContainerButton, FormContet } from "./styles";

function SingUp (){
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    function singSucceful(){
        window.location.href = "http://localhost:3000/chat";

    }

    function singUpEvent(){
        if(name!==''&&email!==''&&password!==''){
        console.log(email,password)
        fetch("http://localhost:3333/register",{
            method:'POST',
            body:JSON.stringify({name,email,password}),
            headers:new Headers({
                'Content-Type':'application/json',
                'Accept':'application/json'
            })
         })
     .then(response => response.json()) 
     .then(response => console.log(response)) 
     .then(json => console.log(json))
     .then(singSucceful)
    }}

    function Handform(e:FormEvent){
        e.preventDefault();
    }
    return(
        <div>
            <Header/>
            <FormContet>
                <form onSubmit={Handform}>

                <label htmlFor="name">digite seu nome</label>

                <input type="text"
                  id={'name'}
                  placeholder={"name"}
                  name={"name"}  
                  value={name} 
                  onChange={e =>setName(e.target.value)}
                />

                <label htmlFor="email">digite seu email</label>

                <input type="text"
                  id={'email'}
                  placeholder={"Email"}
                  name={"email"}  
                  value={email} 
                  onChange={e =>setEmail(e.target.value)}
                />
                    
                <label htmlFor="password">digite seu password</label>

                <input type="text"
                    id={'password'}
                    placeholder={"password"}
                    name={"password"}
                    value={password} 
                    onChange={e =>setPassword(e.target.value)}
                />

                <ContainerButton>
                    <ButtonForm onClick={singUpEvent}>
                        Sing UP
                    </ButtonForm>
                </ContainerButton>
                </form>
            </FormContet>
        </div>
    )
}

export {SingUp}