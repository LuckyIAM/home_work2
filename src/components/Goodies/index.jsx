import React, {useState} from "react";
import Card from "../Card";



export default ({bests,transform}) =>{
    

    const st={
        width: `${bests.length * 280}px`,
        height: "350px",
        display: "flex",
        gap: "30px",
        position: "relative",
        transition: "2s transform ease-out",
        transform: `translateX(${transform}px)`
    }
    console.log(st.width);
    

    return(
                  
        <div className="bestseller-box" style={st}>
            {bests.map((good,i) => 
                    <Card   
                    detail={""}
                    img={good.pictures}
                    price_new={good.price}
                    description={good.description}
                    key={i}
                    />
            )}
        </div>
 
    )
}