import React from "react";

function About({img = "https://via.placeholder.com/215", alt, about}){
return(
        <aside>
            <img src={img} alt={alt}/>
            <p>{about}</p>
        </aside>
    )
}

export default About