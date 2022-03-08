import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    min-height: 100vh;

    background-color: #0B0B0D;

    overflow-x: none;
`

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
        width: 90%;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-wrap: wrap;

        margin: 50px 0;

        .container {
            width: 200px;
            height: 200px;
            
            margin: 10px;
            padding: 20px 10px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            flex-wrap: wrap;

            background-color: #121214;
            color: white;

            border: 1px solid #252529;
            border-radius: 4px;
        }
    }
`