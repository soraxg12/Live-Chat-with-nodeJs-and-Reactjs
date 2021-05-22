import styled from 'styled-components';

const HeaderContainer = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height: 50px;
    background-color:tomato;

    h1{
        color:white;
    }
    li{
        float:left;
        list-style:none;
        padding:0 40px;
        
    }
    a{
        color:white;
        font-size:27px;
        text-decoration:none;
        cursor:pointer;
    }
`;

export {HeaderContainer}