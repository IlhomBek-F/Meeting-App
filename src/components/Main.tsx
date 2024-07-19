import { useState } from "react";
import { JoinOrCreateMeeting } from "./JoinOrCreateMeeting";
import { createMeeting } from "../service/createMeeting";
import { MeetingProvider, useMeeting } from "@videosdk.live/react-sdk";
import MeetingView from "./MeetingView";
import ConfigAPI from "../config/config";
import '../styles/join-container.css';

export default function Main() {
    const {MEETING_API, MEETING_TOKEN} = ConfigAPI;

    const [meetingId, setMeetingId] = useState<string | null>();

    const getMeetingAndToken = async (id?: string | null) => {
        const meetingId = !id ? await createMeeting() : id;
        setMeetingId(meetingId);
    }

    const onMeetingLeave = () => {
        setMeetingId(null);
    }

    return MEETING_TOKEN && meetingId ? (
        <MeetingProvider 
          config={{ meetingId: meetingId as string, micEnabled: true, webcamEnabled: true, name: 'salom', debugMode: false }} 
           token={MEETING_TOKEN as string}>
          <MeetingView onMeetingLeave={onMeetingLeave} />
        </MeetingProvider>   
    ) :  (
        <div className="join-container">
            <JoinOrCreateMeeting getMeetingToken={getMeetingAndToken}/>
        </div>
    )
}