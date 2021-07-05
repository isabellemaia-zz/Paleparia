import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const SpotlightButton = styled.a`
    width: 150px;
    height: 50px;

    font-weight: bold;
    font-size: 18px;
    color: #fff;
    text-decoration: none;

    background: #91BECC;
    border-radius: 12px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin: 0 0 40px 40px;
`
const ProductName = styled.h1`
                font-weight: bold;
                font-size: 24px;    

                margin:0 0 16px 40px;

`

export const SpotlightInfo = (props: any) => {
    return(
        <>
            <ProductName>{props.name ? props.name : `Lorem Ipsum`}</ProductName>
                <SpotlightButton href={props.link ? `/produtos/${props.link}` : '/'}>
                Saiba Mais <FaArrowRight />
            </SpotlightButton>
        </>
    )
}