import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react"
import ReactPlayer from "react-player";


function ParticipantView({participantId}: any) {
  const micRef = useRef<any>(null);
  const {webcamStream, micStream, webcamOn, micOn, isLocal, displayName} = useParticipant(participantId);
  
  const videoStream = useMemo(() => {
    if(webcamOn && webcamStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);

        return mediaStream;
    }
  }, [webcamStream, webcamOn]);

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
        <div key={participantId}>
          <p>Participant: {displayName} | WebCam: {webcamOn ? 'On' : 'Off'} | Mic: {''} {micOn ? 'ON' : 'Off'}</p>
          <audio ref={micRef} autoPlay muted={isLocal}/>
          {webcamOn && (
            <ReactPlayer playsinline
                         pip={false}
                         light={false}
                         controls={false}
                         muted={true}
                         playing={true}
                         url={videoStream}
                         height={'200px'}
                         width={'300px'}
                         onError={(err) => console.log(err, 'participant error')}
                         />
          )}
        </div>
    )
}

export default ParticipantView