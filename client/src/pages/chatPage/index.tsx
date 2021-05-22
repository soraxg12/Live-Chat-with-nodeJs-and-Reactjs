import { useEffect, useState} from 'react'
import { Header } from "../../components/Header";
import { Message } from '../../components/message';
import { ChatContainer, MenssageContainer,EscrevendoStyles } from "./styles";
import soketIo  from 'socket.io-client'

const io = soketIo("http://localhost:3333",{transports: ['websocket', 'polling', 'flashsocket']})

function ChatPage(){
    const [menssage,setMessage] = useState('')
    const [escrevendo,setEscrevendo] = useState('')
    const [allMessages,setAllMessages] = useState<object[]>([])
    const [usersOnline,setUsersOnline] = useState<number>(0)
    const a:Array<object> =[{id:1.22222,name:"felipe",message:"fala fioti"},]
    const nameUser =localStorage.getItem('name')||"Guest";

    function SendMessage(){
        if(menssage!==''){
            io.emit('message',{id:Math.random(),name:nameUser,message:menssage});
        }
        setMessage('')
        setEscrevendo('')
    }

    function handleChange(e:any) {
        setMessage(e.target.value)
        const numdl = menssage.length+1
        if(numdl>2){
            io.emit('escrevendo',nameUser);

        }else if(numdl<=2){
            setEscrevendo('')
            io.emit('escrevendo',false);
        }
    }

    function saveMessage(message:object){
        a.push(message)
        setAllMessages([...a])
    }

    useEffect(()=>{
        io.on('user_on',(user:number)=>{
            console.log(user)
            setUsersOnline(user)
        })
        io.on('escrevendo',(name:string)=>{
            console.log(name)
            setEscrevendo(name)
         
        })
        io.on("message", (message: object) =>{
            saveMessage(message)
        });
    },[])


    return(
        <div>
            <Header users={usersOnline}/>
            
            <MenssageContainer>
                {allMessages.map(( item:any) =>{
                return(
                    <>
                       <Message 
                        name={item.name}
                        message={item.message}
                        />
                     </>
                    )
                })
                }
            </MenssageContainer>
            <EscrevendoStyles>
          {escrevendo&&<p>
                {escrevendo} esta digitando ...
            </p>
            }
            </EscrevendoStyles>
            <ChatContainer>

                <input 
                type="text"
                placeholder={'envie uma menssagem'}
                value={menssage}
                onChange={handleChange}
                />
                <button 
                onClick={SendMessage}
                >Send</button>
            </ChatContainer>
        </div>
    )
}

export { ChatPage }