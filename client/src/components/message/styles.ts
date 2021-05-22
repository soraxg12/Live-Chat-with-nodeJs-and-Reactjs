import styled, { keyframes } from 'styled-components'

const animeteMessage = keyframes`
    from {left: 0px;}
    to {left: 200px;}
`;

const animeteUser = keyframes`
    from {left: 0px;}
    to {left: 150px;}
`;

const MessagemStyles = styled.div`
    display:flex;
    justify-content:end;
    position: relative;
    padding: 30px 0 0 0;
    -webkit-justify-content: flex-start;

  span{
        font-size:20px;
        color:white;
        background-color:tomato;
        border-radius:16px;
        padding-right:20px;
        position: relative;
        left:150px;
        padding:10px;
        animation:${animeteUser} 1.5s;
    }

    p{
        padding:10px;
        font-size:20px;
        color:tomato;
        position: relative;
        left:200px;
        animation:${animeteMessage} 1s;
    }
`;


const WrapperMessage = styled.div`
    display:block;
`;


export {MessagemStyles,WrapperMessage}