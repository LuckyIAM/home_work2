import React, {useState} from "react";
import Card from "../Card";
import dataFavourit from "../../assets/dataFavourit.json"



export default ({transform}) =>{
    

    const st={
        width: `${dataFavourit.length * 280}px`,
        height: "350px",
        display: "flex",
        gap: "30px",
        position: "relative",
        transition: "2s transform ease-out",
        transform: `translateX(${transform}px)`
    }
    console.log(st.width, dataFavourit);
    

    return(
                  
        <div className="bestseller-box" style={st}>
            {dataFavourit.map((good,i) => 
                    <Card   
                    detail={good.discount ? good.discount + "%": ""}
                    img={good.pictures}
                    price_old={good.discount ? good.price - (good.discount *(good.price / 100)): ""}
                    price_new={good.price}
                    description={good.description}
                    key={i}
                    />
            )}
        </div>
 
    )
}