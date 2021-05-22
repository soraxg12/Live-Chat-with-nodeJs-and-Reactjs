import { useEffect } from 'react'
import {Message} from '../message'
import {MessageContainerStyles} from './styles'

interface iProps{
    items:object[]
}

function MessageContainer({items}:iProps){
    useEffect(()=>{
    console.log(items)
        console.log(items)
        items.push({id:1,name:"felipe",message:"oi"})
    },[items])
    return(
        <MessageContainerStyles>
                {items.map(( item:any) =>{
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
        </MessageContainerStyles>
    )
}

export { MessageContainer }