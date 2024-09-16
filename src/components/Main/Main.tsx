import { useRef, useState } from "react";
import { StartMeeting } from "../StartMeeting/StartMeeting";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import MeetingView from "../MeetingView/MeetingView";
import ConfigAPI from "../../config/config";
import { ToastElem, ToastElemModel } from "../../shared/Toast/Toast";
import { getMeetingAndToken } from "../../service";

const MEETING_TOKEN = ConfigAPI.MEETING_TOKEN;

export default function Main() {
    const value = {roomId: null, loading: false, name: ''}
    const toast = useRef(null);
    const [room, setRoom] = useState(JSON.parse(localStorage.getItem('data') || JSON.stringify(value)));

    const startMeeting = (meetingId: string) => {
        if(room.name === '') {
            (toast.current as unknown as ToastElemModel).info('Please enter your name');
            return;
        }
        
        setRoom({...room, roomId: null, loading: true});

        getMeetingAndToken(meetingId)
        .then((id) => {
            const data = {...room, roomId: id, loading: false}
            setRoom(data);
            localStorage.setItem('data', JSON.stringify(data))
        }).catch((err) => {
            (toast.current as unknown as ToastElemModel).error(err);
            setRoom({...room, roomId: null, loading: false});
            localStorage.removeItem('data')
        })

    }

    const onMeetingLeave = () => {
        setRoom({roomId: null, loading: false, name: ''});
        localStorage.removeItem('data')
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