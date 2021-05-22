import {HeaderContainer} from './styles'

interface IProps{
    users?:number
}

const isLogado = localStorage.getItem("token");
const Name = localStorage.getItem("name");

const Header:React.FC<IProps> = ({users}:IProps) =>{
    function singOut(){
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("emailCash");
        window.location.href = "/";
    }

    return(
        <HeaderContainer>
            <ul>
                <li>
                    <h1>{users||0} Users Online !!!</h1>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/chat">
                            Chat
                    </a>
                </li>
               {isLogado?(
               <>
                    <li>
                        <a>
                            {Name}
                        </a>
                    </li>

                    <li>
                        <a onClick={singOut}>
                            Sing Out
                        </a>
                    </li>
                </>
               )
               :
               (
               <>
                    <li>
                        <a href="/sing-in">
                                Sing In
                        </a>
                    </li>
                    <li>
                        <a href="/sing-up">
                                Sing Up
                        </a>
                        </li>
                </>
                )}
            </ul>
        </HeaderContainer>

    )
}

export {Header}