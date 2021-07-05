import React from "react";
import { Link } from "react-router-dom";
import { NavHeader } from "./style";

import { FaFacebookSquare as FaceBook ,FaInstagram as Instagram } from "react-icons/fa";

import logo from '../../assets/img/logo.svg'

const Navbar = () =>{
    return(
        <NavHeader>
            <div>
                    <Link to='/'><img src={logo} alt="Paleparia" /></Link>
                <ul>
                    <Link to='/'>Início</Link>
                    <Link to='/sobre'>Sobre</Link>
                    <Link to='/produtos'>Produtos</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/faq'>FAQ</Link>                    
                </ul>
                    <div>
                        <Link to='fb'><FaceBook /></Link>
                        <Link to='ig'><Instagram/></Link>
                    </div>
            </div>
        </NavHeader>
    )
}
export default Navbar