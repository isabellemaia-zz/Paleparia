import styled from 'styled-components'


export const NavFooter = styled.div`
    margin-top: 200px;

    height: 425px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >ul{
            width: 50%;
            justify-content: space-between;
            display: flex;

            margin-top: 65px;

            a{
                text-decoration: none;
                color: #383D41;

            }
        }

   
`

export const Info = styled.div`
        font-weight: 400;
        font-size: 16px;
`
export const InfoHolder = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
    margin-top: 36px;

`

export const SocialIcons = styled.div`

margin-top: 70px;
    svg{
            width: 25px;
            height: 25px;
            color: #383D41;
            margin: 0 5px;
        }
`