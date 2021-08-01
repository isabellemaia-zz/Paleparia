import React from 'react'
import logo from '../../assets/Logo.png'
import {Bar} from './styles'
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return (
        <>
        <Bar >
            <ul>
                <li><img src={logo} alt="Paleparia"/></li>
                <li> <Link to="/"> Início </Link></li>
                <li> <Link to="/produtos"> Produtos </Link></li>
                <li> <Link to="/"> Sobre </Link></li>
                <li> <Link to="/"> Contato </Link></li>
                
            </ul>
       </Bar>
        </>
        
    )
}

export default Navbar