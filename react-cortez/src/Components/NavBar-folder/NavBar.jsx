import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';

function NavBar (props){

    return(
        <div className="navContainer">
            <div className="nav">
            <Link to={"/"}>
                <img src="./birraencasa_white.png" className='logo' alt="logo"/>
            </Link>
                <ul className="navList">
                    <li><Link to={'/Category/IPA'}>IPA</Link></li>
                    <li><Link to={'/Category/Roja'}>Roja</Link></li>
                    <li><Link to={'/Category/Rubia'}>Rubia</Link></li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar