import styled from 'styled-components'

export const Bar =styled.div `
    min-height: 150px;
    width: 100vw;
    background-color: white;
    align-items: center;
    display: flex;

    box-shadow: 0px 8px 20px -8px rgba(0, 0, 0, 0.25);
    ul{
        display: flex;
        width: 60%;
        justify-content: space-around;
        align-items:center;
        margin:auto;
        li{
            list-style: none;
            a{
            font: 16px  Roboto , sans-serif;
            font-weight: 500;
            text-decoration: none;
            color: black;
            }
            img{
                
                max-height: 120px;
            }
        }
    }
    
`