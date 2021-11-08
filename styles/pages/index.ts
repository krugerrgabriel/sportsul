import styled from "styled-components";

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.black01};

    font-size: 22px;
    font-weight: 600;

    text-transform: uppercase;
`;

export const AdvantagesBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.white01};

    padding: 36px 0;
    margin: 42px 0;

    width: 100%;

    border: 3px solid ${({ theme }) => theme.colors.gray01};
    border-left: 0;
    border-right: 0;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    width: 100%;

    div.layer{
        position: relative;
        width: 30px;
        height: 30px;
        &.truck{
            width: 30px;
            height: 23.33px;
        }
    }

    div:last-child{
        margin: 0 0 0 12px;

        p{
            font-size: 12px;
            font-weight: 600;

            margin: 0;
        }

        span{
            font-size: 12px;
            font-weight: 500;
        }
    }
`;

export const ProductBox = styled.div`
    div.links{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        height: 100%;
    }
`;

export const Tag = styled.p<{ active?: Boolean; }>`
    color: ${({ theme }) => theme.colors.black01};

    font-size: 12px;
    font-weight: 500;

    text-transform: uppercase;

    margin: 0 12px;

    cursor: pointer;

    opacity: ${(props) => props.active ? '1' : '0.6'};

    transition: 0.2s;

    &:hover{
        text-decoration: underline;
    }
`;