import React from "react"
import videoSrc from "../assets/video.mp4";
import useLocalStorage from "../hooks/useLocalStorage";

const Video = () => {
    const [playing, setPlaying] = React.useState(false);
    const [volume, setVolume] = useLocalStorage('volume', '0')
    const video = React.useRef<HTMLVideoElement>(null); 

    React.useEffect(() => {
        console.log(video.current)
    });
    
    React.useEffect(() => {
        if(!video.current) return;
        const n = Number(volume);
        if (n >= 0 && n <= 1) video.current.volume = n;
    }, [volume])

    function forward(){
    if(!video.current) return
        video.current.currentTime += 2;
    }

    function changePlayBackRate(speed: number){
    if(!video.current) return
        video.current.playbackRate = speed;
    }

    function mute(){
    if(!video.current) return
        video.current.muted = ! video.current.muted;
    }
    
    async function pictureInPicture(){
    if(!video.current) return
    if(document.pictureInPictureElement){
        document.exitPictureInPicture();
    }
        await video.current.requestPictureInPicture()
    }

    return (
        <div >
            <div className="flex">
                {playing ? (
                <button onClick={() => video.current?.pause()}>Pause</button>
                ) : (
                <button onClick={() => video.current?.play()}>Play</button>
                )}
                <button onClick={forward}>+ 2s</button>
                <button onClick={() => changePlayBackRate(1)}>1x</button>
                <button onClick={() => changePlayBackRate(2)}>2x</button>
                <button onClick={mute}>Mute</button>
                <button onClick={pictureInPicture}>PiP</button>
            </div>
            <br />

            <div className="flex">
                <button onClick={() => setVolume('0')}>0</button>
                <button onClick={() => setVolume('0.5')}>50</button>
                <button onClick={() => setVolume('1')}>100</button>
            </div>
            <video
            controls 
            ref={video} 
            src={videoSrc}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            ></video>
            
        </div>
    );
}

export default Video;