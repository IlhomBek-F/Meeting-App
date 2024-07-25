import { useEffect, useRef } from "react"
import { useParticipant } from "@videosdk.live/react-sdk";
import useVideoStream from "../hooks/useVideoStream";
import Player from "./Player";
import '../styles/participant.css'

function ParticipantView({participantId}: any) {
  const micRef = useRef<any>(null);
  const videoStream = useVideoStream(participantId)

  const { micStream, webcamOn,screenShareOn, micOn, isLocal, displayName} = useParticipant(participantId);

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
        <div className="person">
          <audio ref={micRef} autoPlay muted={isLocal}/>
          {(webcamOn || screenShareOn) ? (
            <Player id={participantId} videoStream={videoStream} screenShareOn={screenShareOn}/>
          ) : <div className="participant-card"  id={participantId}>
               <p className="participant-name">{displayName[0]?.toUpperCase()}</p>
            </div>}
        </div>
    )
}

export default ParticipantView