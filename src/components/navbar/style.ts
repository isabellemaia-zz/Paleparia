import styled from 'styled-components'

export const NavHeader = styled.div`
    width: 100%;
    height: 100px;

    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);

    >div{
        display: flex;
        justify-content: center;
        align-items: center;


        height: 100%;
        width: 80%;
        margin: 0 auto;
        justify-content: space-between;
        >ul{
            width: 50%;
            justify-content: space-between;
            display: flex;

            a{
                text-decoration: none;
                color: #383D41;

            }
        }
        svg{
            width: 25px;
            height: 25px;

            color: #383D41;

            margin: 0 5px;
        }
    }

`
