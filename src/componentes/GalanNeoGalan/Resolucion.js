import React from "react";
import ivanImagen from "../../imagenes/IvanDePineda.png"
import nicoOcchiato from "../../imagenes/NicoOcchiato.png"
import nachito from "../../imagenes/Nachito.png"
import grego from "../../imagenes/GregoRosello.png"
import "../../styles/galanNeo.css"

export default function Resolucion(props){
    const totalPuntos = props.puntosGalan + props.puntosNeo;
    const porcentajeGalan =  props.puntosGalan / totalPuntos ;
    const porcentajeNeoGalan =  props.puntosNeo / totalPuntos ;

    function pantallasResultado(){
        if(porcentajeGalan > 0.75){
            return(
                <>
                    <h3>Sos todo un Galan! {porcentajeGalan * 100}% Galan</h3>
                    <img src={ivanImagen} width="50%" height="50%" alt="Ivan"/>
                </>
            )
        }
        if(porcentajeGalan > 0.50 && porcentajeGalan <= 0.75){
            return(
                <>
                    <h3>Sos un galan en deconstruccion a su NeoGalanes! {porcentajeGalan * 100}% Galan</h3>
                    <img src={nicoOcchiato} width="50%" height="50%" alt="Nico"/>
                </>
            )
        }
        if(porcentajeGalan > 0.25 && porcentajeGalan < 0.50){
            return(
                <>
                    <h3>Estas muy cerca de ser NeoGalan! {porcentajeNeoGalan * 100}% NeoGalan</h3>
                    <img src={grego} width="50%" height="50%" alt="Grego"/>
                </>
            )
        }
        if(porcentajeGalan < 0.25){
            return(
                <>
                    <h3>Sos todo un NeoGalan! {porcentajeNeoGalan * 100}% NeoGalan</h3>
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