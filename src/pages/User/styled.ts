import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
   

    background-color: #0B0B0D;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 50px;

    input {
        padding: 8px 10px;

        border: 1px solid black;
        border-radius: 4px;

        &:focus {
            border: 1px solid #633bbc;
        }
    }
`
