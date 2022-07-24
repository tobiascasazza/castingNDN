import React, { useEffect } from "react";
import "../../styles/galanNeo.css"
import Nivel from "./Nivel";
import { preguntas } from "../../datos/preguntasGalanNeo";
import Resolucion from "./Resolucion";

export default function GalanNeoGalan() {
    const [contadorPreguntas, setContadorPreguntas] = React.useState(0);
    const [puntosGalan, setPuntosGalan] = React.useState(0);
    const [puntosNeo, setPuntosNeo] = React.useState(0);

    return (
        <>
            <h1>Descubrí si sos Galan o Neo Galan</h1>
            {
                contadorPreguntas >= preguntas.length ?
                    <Resolucion puntosGalan={puntosGalan} puntosNeo={puntosNeo} />
                    :
                    <Nivel 
                        pregunta={preguntas[contadorPreguntas].pregunta}
                        respuestaGalan={preguntas[contadorPreguntas].respuestaGalan}
                        respuestaNeo={preguntas[contadorPreguntas].respuestaNeo}
                        respuestaMedioGalan={preguntas[contadorPreguntas].respuestaMedioGalan}
                        respuestaMedioNeo={preguntas[contadorPreguntas].respuestaMedioNeo}
                        setPuntosGalan={setPuntosGalan} 
                        setPuntosNeo={setPuntosNeo} 
                        setContadorPreguntas={setContadorPreguntas}
                        puntosGalan={puntosGalan}
                        puntosNeo={puntosNeo} 
                        contadorPreguntas={contadorPreguntas} />
                    
            }
        </>
    )
}