import styled from "styled-components";

export const CustomHeader = styled.header`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid #252529;

    background-color: #121214;

    .container {
        width: 80%;
        max-width: 1200px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            text-decoration: none;
        }

        h1 {
            color: white;

            font-size: 28px;
            font-weight: 500;

            span {
                color: #633bbc;
            }
        }

        .icon {
            color: #633bbc;
            font-size: 40px;
        }
    }
`