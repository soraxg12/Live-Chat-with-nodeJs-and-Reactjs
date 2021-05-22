import { MessagemStyles,WrapperMessage } from "./styles"

interface iProps{
    id?:number;
    name:string;
    message:string;
}

const Message:React.FC<iProps> = ({id,name,message}:iProps) =>{
    return(
        <MessagemStyles key={id}>
            <WrapperMessage	>
                <span>{name}</span>
                <p>{message}</p>
            </WrapperMessage>
        </MessagemStyles>
    )
}

export {Message}