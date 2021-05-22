import styled from 'styled-components'

const ChatContainer = styled.div`
    position: fixed;
    bottom:0;
    border:2px solid palevioletred;
    display:flex;
    justify-content:space-between;

    input{
        padding:30px;
        width:80vw;
        border:none;
        border-right:2px solid palevioletred;
        font-size:20px

    }

    button{
        width:20vw;
        padding:30px;
        border:none;
        font-size:20px;
        color:palevioletred;
        font-weight:bold;

        &:hover{
            color:white;
            background-color:palevioletred;
            opacity:.8;
            cursor: pointer;
        }
    }
`;

const MenssageContainer = styled.div`
`;

const EscrevendoStyles = styled.div`
    position: relative;
    p{
        position: fixed;
        bottom:100px;
        left:20px;
        color:palevioletred;
        font-weight:bold;
    }
`;

export {ChatContainer,MenssageContainer,EscrevendoStyles}