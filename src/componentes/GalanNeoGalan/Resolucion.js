import React from "react";
import ivanImagen from "../../imagenes/IvanDePineda.png"
import nicoOcchiato from "../../imagenes/NicoOcchiato.png"
import nachito from "../../imagenes/Nachito.png"
import grego from "../../imagenes/GregoRosello.png"
import fede from "../../imagenes/FedeBal.png"
import "../../styles/galanNeo.css"

export default function Resolucion(props){

    function pantallasResultado(){
        console.log("Puntos Galan:" + props.puntosGalan)
            console.log("Puntos Medio Galan:" + props.puntosMedioGalan)
            console.log("Puntos Medio NeoGalan:" + props.puntosMedioNeo)
            console.log("Puntos NeoGalan:" + props.puntosNeo)
        if(
            props.puntosGalan > props.puntosMedioGalan &&
            props.puntosGalan > props.puntosMedioNeo &&
            props.puntosGalan > props.puntosNeo
            ){
            return(
                <>
                    <h3>Sos todo un Galan!</h3>
                    <img src={ivanImagen} width="50%" height="50%" alt="Ivan" style={{}}/>
                </>
            )
        }
        else if(
            props.puntosMedioGalan >= props.puntosGalan &&
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
        else if(
            props.puntosMedioNeo > props.puntosMedioGalan &&
            props.puntosMedioNeo > props.puntosGalan &&
            props.puntosMedioNeo >= props.puntosNeo
            ){
            return(
                <>
                    <h3>Estas muy cerca de ser NeoGalan!</h3>
                    <img src={grego} width="50%" height="50%" alt="Grego"/>
                </>
            )
        }
        else if(
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
        }else{
            return(
                <>
                    <h3>Sos un intermedio, tenes buenos dotes de Galan y de NeoGalan. Que no se te suba a la cabeza!</h3>
                    <img src={fede} width="50%" height="50%" alt="Fede Bal"/>
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