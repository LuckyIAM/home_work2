import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../Logo";
import {ReactComponent as Cart} from "./img/ic-cart.svg";
import {ReactComponent as Favorite,} from "./img/ic-favorites.svg";
import {ReactComponent as Profile} from "./img/ic-profile.svg";
import "./style.css";
import {Search} from "react-bootstrap-icons";




export default ({products, update, openCards}) =>{
    const [text, changeText] = useState("Поиск")

    const hendler = e =>{
        changeText(e.target.value);
        const res = products.filter(prd =>{
            prd.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
        })
        if(!text){
            update(products)
        }else{
            update(res)
        }
    }
    return (
        <header>
            <Logo/>
            <div className="search">
                <input type="search" value={text} onChange={hendler}/><Search className="iconSearch" onClick={e => openCards(true)}/>
            </div>
            <nav>
            <a href=""><Favorite/></a>
            <a href=""><Cart/></a>
            <a href=""><Profile/></a>
            </nav>
        </header>
    )
}