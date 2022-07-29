import React, { useEffect } from "react";
import "../../styles/galanNeo.css"
import Nivel from "./Nivel";
import { preguntas } from "../../datos/preguntasGalanNeo";
import Resolucion from "./Resolucion";
import Carta from "./Carta";
import { Button } from "@mui/material";
import { textAlign } from "@mui/system";

export default function GalanNeoGalan() {
    const [contadorPreguntas, setContadorPreguntas] = React.useState(0);
    const [puntosGalan, setPuntosGalan] = React.useState(0);
    const [puntosNeo, setPuntosNeo] = React.useState(0);
    const [puntosMedioGalan, setPuntosMedioGalan] = React.useState(0);
    const [puntosMedioNeo, setPuntosMedioNeo] = React.useState(0);

    function reiniciar(){
        setContadorPreguntas(0);
        setPuntosGalan(0);
        setPuntosNeo(0);
        setPuntosMedioGalan(0);
        setPuntosMedioNeo(0);
    }

    return (
        <>
            <div style={{textAlign: 'initial'}}>
            <Button variant="outlined" color='error' onClick={reiniciar}>Reiniciar</Button>
            </div>
            
            {
                contadorPreguntas >= preguntas.length ?
                    <Resolucion 
                        puntosGalan={puntosGalan} 
                        puntosNeo={puntosNeo} 
                        puntosMedioGalan={puntosMedioGalan} 
                        puntosMedioNeo={puntosMedioNeo} 
                    />
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
                        setPuntosMedioGalan={setPuntosMedioGalan}
                        setPuntosMedioNeo={setPuntosMedioNeo}
                        puntosMedioGalan={puntosMedioGalan}
                        puntosMedioNeo={puntosMedioNeo}
                        puntosGalan={puntosGalan}
                        puntosNeo={puntosNeo} 
                        contadorPreguntas={contadorPreguntas} />
                    
            }
        </>
    )
}