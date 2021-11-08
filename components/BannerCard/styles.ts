import styled from "styled-components";

export const Body = styled.div<{ type: number; }>`
    position: relative;
    height: ${(props) => props.type == 1 ? '550px' : '270px'};
    width: 100%;

    ${(props) => props.type == 3 ? 'margin: 10px 0 0 0;' : ''};

    cursor: pointer;

    margin: 0 0 12px 0;
    
    div.layer{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        
        background-color: ${({ theme }) => theme.colors.white01};
        
        width: ${(props) => props.type == 1 ? '325px' : props.type == 2 ? '135px' : '175px'};
        height: ${(props) => props.type == 1 ? '112px' : '56px'};
        
        border-radius: 4px;

        transition: 0.2s;
        
        span{
            font-size: 12px;
            font-weight: 600;
            
            opacity: 0.4;
        }
        
        p{
            font-size: 22px;
            font-weight: 600;
            
            margin: 0;

            transition: 0.2s;
        }
    }

    &:hover{
        div.layer{
            box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.05);

            p{
                text-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
            }
        }
    }
`;