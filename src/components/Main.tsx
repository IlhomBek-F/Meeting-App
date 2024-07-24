import { useRef, useState } from "react";
import { StartMeeting } from "./StartMeeting";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import MeetingView from "./MeetingView";
import ConfigAPI from "../config/config";
import '../styles/join-container.css';
import { ToastElem, ToastElemModel } from "./shared/Toast";
import { getMeetingAndToken } from "../service";

export default function Main() {
    const MEETING_TOKEN = ConfigAPI.MEETING_TOKEN;
    const toast = useRef(null);
    const [room, setRoom] = useState({roomId: null, loading: false});
    const [name, setName] = useState<string>('');

    const startMeeting = (meetingId: string) => {
        setRoom({roomId: null, loading: true});

        getMeetingAndToken(meetingId)
        .then((id) => {
            setRoom({roomId: id, loading: false});
        }).catch((err) => {
            (toast.current as unknown as ToastElemModel).error(err);
            setRoom({roomId: null, loading: false});
        })

    }

    const onMeetingLeave = () => {
        setRoom({roomId: null, loading: false});
    }

    return (
    <>
       <ToastElem ref={toast}/>
       {room.roomId ? 
        <MeetingProvider 
          config={{ meetingId: room.roomId, micEnabled: false, webcamEnabled: false, name, debugMode: false }} 
           token={MEETING_TOKEN as string} joinWithoutUserInteraction={true}>
          <MeetingView onMeetingLeave={onMeetingLeave} />
        </MeetingProvider> : 
        <StartMeeting startMeeting={startMeeting} setName={setName} loading={room.loading}/>}
    </>
    )
}