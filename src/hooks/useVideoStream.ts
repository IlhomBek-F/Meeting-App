import { useParticipant } from "@videosdk.live/react-sdk";

export default function useVideoStream(id: string  = '') {
    const {webcamStream, webcamOn} = useParticipant(id);
      if(webcamOn && webcamStream) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(webcamStream.track);
  
          return mediaStream;
      }
}