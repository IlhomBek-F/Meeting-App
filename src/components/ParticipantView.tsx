import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react"
import ReactPlayer from "react-player";
import '../styles/participant.css'
import useVideoStream from "../hooks/useVideoStream";
import Player from "./Player";

function ParticipantView({participantId}: any) {
  const micRef = useRef<any>(null);
  const {webcamStream, micStream, webcamOn, micOn, isLocal, displayName} = useParticipant(participantId);

  const videoStream = useVideoStream(participantId)

  useEffect(() => {
     if(micRef.current) {
        if(micOn && micStream) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(micStream.track);

            micRef.current.srcObject = mediaStream;
            micRef.current.play()
            .catch((error: any) => console.log('video play() failed', error));
        }else {
            micRef.current.srcObject = null;
        }
     }
  }, [micStream, micOn])

  
    return (
        <div >
          <p>Participant: {displayName} | WebCam: {webcamOn ? 'On' : 'Off'} | Mic: {''} {micOn ? 'ON' : 'Off'}</p>
          <audio ref={micRef} autoPlay muted={isLocal}/>
          {webcamOn ? (
            <Player id={participantId} videoStream={videoStream}/>
          ) : <div className="participant-card"  id={participantId}>
               <p className="participant-name">{displayName[0].toUpperCase()}</p>
            </div>}
        </div>
    )
}

export default ParticipantView