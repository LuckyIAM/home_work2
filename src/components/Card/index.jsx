import React, {useState} from "react";
import "./style.css";
import { Heart, HeartFill} from "react-bootstrap-icons";

const Card = ({like,detail, img, price_old, price_new, description}) =>{
    const[data, setData] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token"));
    let [cnt, setCnt] = useState(0);
    const [heart, setHeart] = useState(<Heart/>);
    const st = {
        position: "absolute",
        right: "5px",
        top: "0px",
        fontSize: "30px",
        fontWeight: 700
    }

    const addlike = (e) => {
        if(e.type === "click"){
            if(cnt % 2 === 0){
                setHeart(<HeartFill/>)                
                setCnt(cnt +1);
            }else if (cnt % 2 === 1 ){
                setHeart(<Heart/>)
                setCnt(cnt +1);

            }
        }
        
    } 


    const cardStyle = {backgroundImage: `url(${img})`}
    

    return<>
    <div className="card">
        <div className={"add-favourite" && (cnt % 2 === 0) ? 
        "text-secondary" : "text-danger" } style={st} onClick={addlike}>{heart}</div>
        <div className="show-detail"><span className="badge bg-danger rounded-pill">{detail}</span></div>
        <div className="card_img" style={cardStyle}></div>
        <div className="old_price"><small><del>{price_old}</del></small> </div>
        <div className="new_price">{price_new} ₽</div>
        <div className="description">{description}</div>
        <button className="btn">В корзину</button>
    </div>
    </> 
}
export default Card;
