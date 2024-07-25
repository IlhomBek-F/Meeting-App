import { useParticipant } from "@videosdk.live/react-sdk";

export default function useVideoStream(id: string = '') {
    const { webcamStream, webcamOn, screenShareOn, screenShareStream } = useParticipant(id);
    if (webcamOn && webcamStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);

        return mediaStream;
    } else if (screenShareOn && screenShareStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(screenShareStream.track);
        return mediaStream
    }
}