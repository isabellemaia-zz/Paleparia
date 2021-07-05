import React from "react";
import { useParams } from "react-router";


const SingleProduct = () =>{
    const { id } = useParams<{id?: string}>();
    return(
        <>
        <h1>Id do produto: {id}</h1>
        </>
        )
}

export default SingleProduct