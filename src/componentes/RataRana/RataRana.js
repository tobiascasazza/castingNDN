import React, { useEffect, useState } from "react";
import "../../styles/rataRana.modules.css"
import Carta from "../GalanNeoGalan/Carta";
import { nets } from "face-api.js";

export default function RataRana() {
    const [playing, setPlaying] = useState(true);

    const changeButton = () => {
        setPlaying(!playing)
    }

    const startVideo = () => {
        navigator.getUserMedia(
            {
                video: true
            },
            (stream) => {
                let video = document.getElementsByClassName('app_videoFeed')[0];
                if (video) {
                    video.srcObject = stream;
                }
            },
            (err) => console.log(err)
        )
    }

    useEffect(() => {
        if (playing) {
            Promise.all([
                nets.tinyFaceDetector.loadFromUri('./models'),
                nets.faceLandmark68Net.loadFromUri('./models'),
                nets.faceExpressionNet.loadFromUri('./models'),
                nets.ageGenderNet.loadFromUri('/models'),
                nets.faceExpressionNet.loadFromUri('/models')
            ]).then(startVideo);

        } else {
            let video = document.getElementsByClassName('app_videoFeed')[0];
            video?.srcObject?.getTracks()[0].stop();
        }
    }, [playing])
    
    const HEIGTH = 300;
    const WIDTH = 300;

    

    return (
        <>
        <h3 className="proximamente">Proximamente</h3>
            <div className="pantalla">
                 <div className="video">
                    <video className="app_videoFeed" width={WIDTH} height={HEIGTH} autoPlay muted></video>
                </div> 


                {playing ? (
                    <div onClick={changeButton}>
                        <Carta respuesta="Stop" />
                    </div>
                ) : (
                    <div onClick={changeButton}>
                        <Carta respuesta="Start" />
                    </div>

                )}
            </div>

        </>
    )
}
