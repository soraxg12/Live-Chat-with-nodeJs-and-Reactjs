import styled from 'styled-components'

const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px;
    label{
        font-size:23px;
        color:palevioletred;
    }
    input{
        padding: 10px;
        border: 2px solid palevioletred;
        width:400px;
        border-radius:8px;
    }
`;

export{InputContainer}