import React, { useEffect } from "react";
import "../../styles/galanNeo.css"
import Carta from "./Carta";

export default function Nivel(props) {

    function onClickRespuesta(tipo){
        console.log("pasa")
        switch (tipo) {
            case props.respuestaGalan:
                props.setPuntosGalan(props.puntosGalan + 2);
                props.setContadorPreguntas(contador => contador + 1)
                break;
            case props.respuestaNeo:
                props.setPuntosNeo(props.puntosNeo + 2);
                props.setContadorPreguntas(contador => contador + 1)
                break;
            case props.respuestaMedioGalan:
                props.setPuntosGalan(props.puntosGalan + 1);
                props.setContadorPreguntas(contador => contador + 1)
                break;
            case props.respuestaMedioNeo:
                props.setPuntosNeo(props.puntosNeo + 1);
                props.setContadorPreguntas(contador => contador + 1)
                break;
            default:
                props.setContadorPreguntas(contador => contador + 1)
        }
    }

    return (
        <>
            <h3>{props.pregunta}</h3>
            <ul className="lista">
                <img src={props.imagen} />
                <li className={"listaElemento"} onClick={() => onClickRespuesta(props.respuestaGalan)} >
                    <Carta respuesta={props.respuestaGalan} />
                </li>
                <li className={"listaElemento"} onClick={() => onClickRespuesta(props.respuestaNeo)} >
                    <Carta respuesta={props.respuestaNeo} />
                </li>
                <li className={"listaElemento"} onClick={() => onClickRespuesta(props.respuestaMedioGalan)}>
                    <Carta respuesta={props.respuestaMedioGalan}  />
                </li>
                <li className={"listaElemento"} onClick={() => onClickRespuesta(props.respuestaMedioNeo)}>
                    <Carta respuesta={props.respuestaMedioNeo}  />
                </li>
            </ul>
        </>
    )
}