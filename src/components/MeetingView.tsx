import Header from "./Header";
import { useMeeting } from "@videosdk.live/react-sdk";
import '../styles/meetingView.css';
import ParticipantScreen from "./ParticipantScreen";
import ParticipantView from "./ParticipantView";
import SideBar from "./SideBar";
import { useState } from "react";

let elem: HTMLElement;

export default function MeetingView({onMeetingLeave}: any) {
    const [visible, setVisble] = useState(false);

    const {join, participants, meetingId, toggleScreenShare} = useMeeting({
        onMeetingJoined: () => {
            console.log(participants)
        },
        onMeetingLeft: () => {
            onMeetingLeave();
        },
        onSpeakerChanged: (activeSpeakerId: string | null) => {
           const activeParticipant = document.getElementById(activeSpeakerId as string) as HTMLElement;
           elem?.classList.remove('active');
           activeParticipant?.classList.add('active');
           elem = activeParticipant
        },
    })

    return (
        <>
        <Header showParticipants={() => setVisble(!visible)}/>
        <p>{meetingId}</p>
        <button onClick={() => join()}>Join</button>
        <button onClick={() => toggleScreenShare()}>screenShare</button>
        <ParticipantScreen>
        {[...participants.keys()].slice(0, 5).map((participantId) => {
            return <div className="person">
                <ParticipantView participantId={participantId} key={participantId}/>
            </div>
        })}
        </ParticipantScreen>
        <SideBar visible={visible} onHide={() => setVisble(false)}/>
        </>

    )
}