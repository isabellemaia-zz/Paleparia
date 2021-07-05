import React from "react";
import { useParams } from "react-router";


const Products = () =>{
    const { id } = useParams<{id?: string}>();
    return(
        <>
        <h1>Todos os produtos</h1>
        </>
        )
}

export default Products