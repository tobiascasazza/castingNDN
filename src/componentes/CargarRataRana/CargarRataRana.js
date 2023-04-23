import React, {useState, useRef, useEffect} from "react";
import * as faceapi from "face-api.js";
import Carta from "../GalanNeoGalan/Carta";

export default function RataRana() {
    const [playing, setPlaying] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
    const [faceDetector, setFaceDetector] = useState()
    const videoRef = useRef()
    const canvasRef = useRef()
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
        setVideoStarted(true)
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(
                videoRef.current,
                new faceapi.TinyFaceDetectorOptions()
            ).withFaceLandmarks().withFaceDescriptors().withFaceExpressions();
            setFaceDetector(detections[0].landmarks.positions)
            
            const canvas = faceapi.createCanvasFromMedia(videoRef.current)
            canvasRef.current.innerHtml = canvas
            const displaySize = {width: WIDTH, height: HEIGTH}
            faceapi.matchDimensions(canvasRef.current, displaySize)
            const resized = faceapi.resizeResults(detections, displaySize)
            faceapi.draw.drawDetections(canvasRef.current, resized)
        }, 100)

        
    }

    useEffect(() => {
        if (playing) {
            const loadModels = () => {
                const MODEL_URL = process.env.PUBLIC_URL + '/models';
                Promise.all([

                    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                    faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
                    faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                ]).then(startVideo).catch((e) => console.log(e));
            }
            loadModels();
        } else {
            let video = document.getElementsByClassName('app_videoFeed')[0];
            video?.srcObject?.getTracks()[0].stop();
            setVideoStarted(false)
        }


    }, [playing])


    const HEIGTH = 300;
    const WIDTH = 300;



    return (
        <>
            <h3 className="proximamente">Proximamente</h3>
            <div className="pantalla">
                <div className="video">
                    <video ref={videoRef} className="app_videoFeed" width={WIDTH} height={HEIGTH} autoPlay muted></video>

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

                <canvas width="940" height="650" ref={canvasRef} />
            </div>
            <Carta respuesta={faceDetector > 0.3 ? 'RATA' : 'RANA'} />
            
        </>
    )
}
