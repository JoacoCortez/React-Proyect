import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget';


function NavBar (props){

    return(
        <div className="navContainer">
            <div className="nav">
                <h2 className="subtitle">Birra en Casa</h2>
                <ul className="navList">
                    <a href="">IPA</a>
                    <a href="">Roja</a>
                    <a href="">Rubia</a>
                </ul>
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar