import styled from "styled-components";
import Link from 'next/link';

export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.white01};

    width: 100vw;

    padding: 24px 42px;

    border-bottom: 3px solid ${({ theme }) => theme.colors.gray01};

    position: sticky;
    left: 0;
    top: 36px;

    p.logo{
        font-size: 36px;

        margin: 0;
    }

    div.layer{
        height: 18px;
        width: 18px;
        &.user{
            width: 14px;
        }

        margin: 0 18px;

        position: relative;
    }

    div:nth-child(2){
        a{
            margin: 0 12px;
        }
    }

    div:last-child{
        display: flex;
    }
`;

export const LinkEdit = styled(Link)`
    font-size: 14px;
    font-weight: 500;
`;

export const CartLayer = styled.div`
    height: 18px;
    width: 16px;

    position: relative;

    margin: 0 18px;

    div.counter{
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({ theme }) => theme.colors.black01};
        color: ${({ theme }) => theme.colors.white01};

        position: absolute;
        top: -4px;
        right: -4px;

        width: 16px;
        height: 16px;

        border-radius: 50%;

        font-size: 9px;
        font-weight: 700;
    }
`;