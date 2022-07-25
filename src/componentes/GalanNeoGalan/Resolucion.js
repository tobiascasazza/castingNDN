import React from "react";
import ivanImagen from "../../imagenes/IvanDePineda.png"
import nicoOcchiato from "../../imagenes/NicoOcchiato.png"
import nachito from "../../imagenes/Nachito.png"
import grego from "../../imagenes/GregoRosello.png"
import "../../styles/galanNeo.css"

export default function Resolucion(props){

    function pantallasResultado(){
        if(
            props.puntosGalan > props.puntosMedioGalan &&
            props.puntosGalan > props.puntosMedioNeo &&
            props.puntosGalan > props.puntosNeo
            ){
            return(
                <>
                    <h3>Sos todo un Galan!</h3>
                    <img src={ivanImagen} width="50%" height="50%" alt="Ivan"/>
                </>
            )
        }
        if(
            props.puntosMedioGalan > props.puntosGalan &&
            props.puntosMedioGalan > props.puntosMedioNeo &&
            props.puntosMedioGalan > props.puntosNeo
            ){
            return(
                <>
                    <h3>Sos un Galan que adquirio cosas de NeoGalan !</h3>
                    <img src={nicoOcchiato} width="50%" height="50%" alt="Nico"/>
                </>
            )
        }
        if(
            props.puntosMedioNeo > props.puntosMedioGalan &&
            props.puntosMedioNeo > props.puntosGalan &&
            props.puntosMedioNeo > props.puntosNeo
            ){
            return(
                <>
                    <h3>Estas muy cerca de ser NeoGalan!</h3>
                    <img src={grego} width="50%" height="50%" alt="Grego"/>
                </>
            )
        }
        if(
            props.puntosNeo > props.puntosMedioGalan &&
            props.puntosNeo > props.puntosMedioNeo &&
            props.puntosNeo > props.puntosGalan
            ){
            return(
                <>
                    <h3>Sos todo un NeoGalan!</h3>
                    <img src={nachito} width="50%" height="50%" alt="Nachito"/>
                </>
            )
        }
    }

    return(
        <>
        {
           pantallasResultado()
        }
        </>
        
    )
}