import styled from 'styled-components';

const FormContet = styled.div`
    display:flex;
    padding:40px 0;
    justify-content:center;
    align-items:center;

    form{
        padding:30px;
        border:5px tomato solid;
        border-radius: 16px;
        display:flex;
        flex-direction:column;
        padding: 10px;
    }

    label{
        margin:15px 0 0 0;
        font-size:23px;
        color:tomato;
    }
    input{
        padding: 10px;
        border: 2px solid tomato;
        width:400px;
        border-radius:8px;
        font-size:17px;
        background-color:white;
    }
`;

const ContainerButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const ButtonForm = styled.button`
    margin:15px 0 0 0;
    display:flex;
    text-align:center;
    font-weight:bold;
    padding:10px;
    color:tomato;
    border:2px solid tomato;
    border-radius:8px;
    width:250px;
    text-align:center;
    background-color:white;
`

export {FormContet,ContainerButton,ButtonForm}