import React, {useState} from "react";
import BlogCard from "../BlogCard";

export default ({data,transform}) =>{
    

    const st={
        width: `${data.length * 280}px`,
        height: "390px",
        display: "flex",
        gap: "30px",
        position: "relative",
        transition: "2s transform ease-out",
        transform: `translateX(${transform}px)`
    }
    console.log(st.width);
    
//img, data_publication, title
    return(
                  
        <div className="bestseller-box" style={st}>
            {data.map((d,i) => 
                    <BlogCard   
                    img={d.image}
                    data_publication={new Date(d.created_at).getFullYear()}
                    title={d.title}
                    key={i}
                    />
            )}
        </div>
    )
}