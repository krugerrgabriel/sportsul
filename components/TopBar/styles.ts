import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.black01};

    height: 36px;
    width: 100vw;

    padding: 0 42px;

    position: sticky;
    left: 0;
    top: 0;
`;

export const FirstBase = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    margin: 0 12px;

    opacity: 0.8;

    div.layer{
        height: 10px;
        width: 10px;

        position: relative;

        &.pin{
            width: 8.28px;
        }
    }

    p{
        color: ${({ theme }) => theme.colors.white01};

        font-size: 11px;
        font-weight: 500;

        margin: 0 0 0 12px;
    }
`;

export const SecondBase = styled.div`
    display: flex;
    flex-direction: row;

    div.layer{
        height: 12px;
        width: 12px;

        position: relative;

        margin: 0 6px;
    }
`;