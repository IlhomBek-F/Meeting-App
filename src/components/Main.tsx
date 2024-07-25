import { useRef, useState } from "react";
import { StartMeeting } from "./StartMeeting";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import MeetingView from "./MeetingView";
import ConfigAPI from "../config/config";
import { ToastElem, ToastElemModel } from "./shared/Toast";
import { getMeetingAndToken } from "../service";

export default function Main() {
    const MEETING_TOKEN = ConfigAPI.MEETING_TOKEN;
    const toast = useRef(null);
    const [room, setRoom] = useState({roomId: null, loading: false, name: ''});

    const startMeeting = (meetingId: string) => {
        if(room.name === '') {
            (toast.current as unknown as ToastElemModel).error('Please enter your name');
            return;
        }
        
        setRoom({...room, roomId: null, loading: true,});

        getMeetingAndToken(meetingId)
        .then((id) => {
            setRoom({...room, roomId: id, loading: false});
        }).catch((err) => {
            (toast.current as unknown as ToastElemModel).error(err);
            setRoom({...room, roomId: null, loading: false});
        })

    }

    const onMeetingLeave = () => {
        setRoom({...room, roomId: null, loading: false});
    }

    return (
    <>
       <ToastElem ref={toast}/>
       {room.roomId ? 
        <MeetingProvider 
          config={{ meetingId: room.roomId, micEnabled: false, webcamEnabled: false, name: room.name, debugMode: false }} 
           token={MEETING_TOKEN as string} joinWithoutUserInteraction={true}>
          <MeetingView onMeetingLeave={onMeetingLeave} />
        </MeetingProvider> : 
        <StartMeeting startMeeting={startMeeting} setRoom={setRoom} loading={room.loading}/>}
    </>
    )
}