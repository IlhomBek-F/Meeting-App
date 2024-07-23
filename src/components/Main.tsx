import { useRef, useState } from "react";
import { StartMeeting } from "./StartMeeting";
import { createMeeting } from "../service/createMeeting";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import MeetingView from "./MeetingView";
import ConfigAPI from "../config/config";
import '../styles/join-container.css';
import { Toast } from "primereact/toast";

export default function Main() {
    const MEETING_TOKEN = ConfigAPI.MEETING_TOKEN;
    const toast = useRef(null);
    const [roomId, setRoomId] = useState<string | null>();

    const getMeetingAndToken = async (id?: string | null) => {
        try {
          const roomId = !id ? await createMeeting() : id;
          
          return roomId;
        } catch (error) {
            (toast.current as any).show({severity:'error', summary: 'Error', detail:'Something went wrong, Please try again.', life: 2000});
        }
    }

    const onMeetingLeave = () => {
        setRoomId(null);
    }

    return (
    <>
        <Toast ref={toast} />
        <MeetingProvider 
          config={{ meetingId: roomId as string, micEnabled: true, webcamEnabled: true, name: 'salom', debugMode: false }} 
           token={MEETING_TOKEN as string}>
           {MEETING_TOKEN && roomId && <MeetingView onMeetingLeave={onMeetingLeave} /> ||
             <StartMeeting getMeetingToken={getMeetingAndToken} setRoomId={setRoomId}/>
          }
        </MeetingProvider>   
    </>
    )
}