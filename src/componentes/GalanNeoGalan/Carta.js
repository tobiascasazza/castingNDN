import React from "react";
import "../../styles/galanNeo.css"

export default function Carta(props){

        return(
            <div className={"card"} >
                <h4>{props.respuesta}</h4>
            </div>
        )
    
}