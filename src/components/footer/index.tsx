import React from "react";
import { Link } from "react-router-dom";
import { Info, InfoHolder, NavFooter, SocialIcons } from "./style";



import { FaFacebookSquare as FaceBook ,FaInstagram as Instagram } from "react-icons/fa";
import { useFetch } from "../../hooks/swrUse";

const Footer = () =>{
    const { data } = useFetch("informacoes");
    // console.log(data)
    if (!data) {
      return <p>Carregando...</p>;
    }
    const facebookLink = (user: string) => {
        const url = 'https://www.facebook.com/'
        const treatedUser = user.replace('/', '')
        const newUrl = url + treatedUser
        return newUrl
    }

    const instagramLink = (user: string) => {
        const url = 'https://www.instagram.com/'
        const treatedUser = user.replace('@', '')
        const newUrl = url + treatedUser
        return newUrl
    }

        return(
            <NavFooter>
                    <SocialIcons>
                        <a href={facebookLink(data.facebook)}><FaceBook /></a>
                        <a href={instagramLink(data.instagram)}><Instagram/></a>
                    </SocialIcons>
                    <ul>
                        <Link to='/'>Início</Link>
                        <Link to='/sobre'>Sobre</Link>
                        <Link to='/produtos'>Produtos</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/faq'>FAQ</Link>                    
                    </ul>
                       <InfoHolder>
                          <Info>{data.CNPJ}</Info>
                          <Info>{data.address}</Info>
                          <Info>{data.name}</Info>
                          <Info>{data.group}</Info>
                       </InfoHolder>
            </NavFooter>
        )
    


    
}
export default Footer