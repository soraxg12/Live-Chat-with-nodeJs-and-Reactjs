import { useState,FormEvent, useEffect } from "react";
import { Header } from "../../components/Header";
import { ButtonForm, ContainerButton, FormContet } from "../SingUp/styles";

interface Ijson{
    Name:string;
    Email:string;
    password:string;
    token:string
}

function SingIn (){
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const [Token,setToken]=useState<Ijson[]>([])

    useEffect(()=>{
        console.log(Token)
    },[Token,setToken])

    function saveLocalStorage(resonse:Ijson){
        localStorage.setItem("token",`${resonse.token}`)
        localStorage.setItem("emailCash",`${resonse.Email}`)
        localStorage.setItem("name",`${resonse.Name}`)
    }

    function singSucceful(){
        window.location.href = "http://localhost:3000/chat";

    }

    function singEvent(){
        if(email!==''&&password!==''){
        fetch("http://localhost:3333/login",{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:new Headers({
                'Content-Type':'application/json',
                'Accept':'application/json'
            })
         })
     .then(response => response.json()) 
     .then(response => saveLocalStorage(response))    
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
                    <ButtonForm onClick={singEvent}>
                        Sing UP
                    </ButtonForm>
                </ContainerButton>
                </form>
            </FormContet>
        </div>
    )
}

export {SingIn}