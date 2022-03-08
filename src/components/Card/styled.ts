import styled from 'styled-components';

export const CardUser = styled.div`
    width: 500px;
    height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-color: #121214;

    color: white;

    margin-top: 50px;

    border: 1px solid #252529;
    border-radius: 4px;

    padding: 15px 0;

    img {
        width: 200px;
        margin-bottom: 20px;

        border-radius: 4px;
    }

    h1 {
        margin-bottom: 20px;
    }

    p { 
        margin-bottom: 10px;
        text-align: center;
    }
`