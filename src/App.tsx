import React from "react";
import Input from "./Input";
import videoSrc from "./video.mp4";

type Venda = {
  id: string;
  nome: string;
  status: string;
}

function App() {
  const [data, setData ] = React.useState<null | Venda[]>(null);
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  const [playing, setPlaying] = React.useState(false);

  const video = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if(inicio !== '' && final !== '')
    fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
    .then((r) => r.json())
    .then((json) => setData(json as Venda[]))
    .catch((error) => console.log(error))
  },[inicio, final]);

  React.useEffect(() => {
    console.log(video.current)
  });

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
    <div>
      <div className="flex">
        <p>{playing ? (
          <button onClick={() => video.current?.pause()}>Pause</button>
        ) : (
          <button onClick={() => video.current?.play()}>Play</button>
        )}</p>
        <button onClick={forward}>+ 2s</button>
        <button onClick={() => changePlayBackRate(1)}>1x</button>
        <button onClick={() => changePlayBackRate(2)}>2x</button>
        <button onClick={mute}>Mute</button>
        <button onClick={pictureInPicture}>PiP</button>
      </div>
      <video
       controls 
       ref={video} 
       src={videoSrc}
       onPlay={() => setPlaying(true)}
       onPause={() => setPlaying(false)}
       ></video>

      <br></br>
      <div>
        <Input label="Início" type="date" setState={setInicio} value={inicio} />
        <Input label="Final" type="date" setState={setFinal} value={final} />
      </div>
      <ul >
       {data && 
        data.map((venda) => (
          <li key={venda.id} >
            {venda.nome}: {venda.status}
          </li>
        ))
       }
      </ul>
    </div>
  )
}

export default App
