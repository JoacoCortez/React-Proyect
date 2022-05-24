import React, { useEffect, useState } from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';
// import {getFirestore, collection, getDocs} from 'firestore/firebase';


// function getCategories(){

//     const db = getFirestore();

//     const itemsCollection = collection(db, "items");

    
//     return getDocs(itemsCollection)
// }




function NavBar (props){

    // const [categories, setCategories] = useState([])
    
    // useEffect(()=> {
    //     getCategories()
    //         .then(snapshot=>{
    //             const categories = snapshot.docs.map(doc => doc.data().category)
    //             setCategories(categories);

    //         })



    // }, [])
    
    
    return(
        <div className="navContainer">
            <div className="nav">
            <Link to={"/"}>
                <img src="./birraencasa_white.png" className='logo' alt="logo"/>
            </Link>
                <ul className="navList">
                    <li><Link to={'/category/IPA'}>IPA</Link></li>
                    <li><Link to={'/category/Roja'}>Roja</Link></li>
                    <li><Link to={'/category/Rubia'}>Rubia</Link></li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar