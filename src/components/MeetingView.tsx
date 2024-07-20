import { useEffect, useState } from "react";
import Header from "./Header";
import { useMeeting } from "@videosdk.live/react-sdk";
import ParticipantView from "./ParticipantView";

export default function MeetingView({onMeetingLeave}: any) {
    const [joined, setJoin] = useState<boolean>();
    let elem: HTMLElement;

    const {join, participants, meetingId} = useMeeting({
        onMeetingJoined: () => {
            setJoin(true)
        },
        onMeetingLeft: () => {
            onMeetingLeave();
        },
        onSpeakerChanged: (activeSpeakerId: string | null) => {
           const activeParticipant = document.getElementById(activeSpeakerId as string) as HTMLElement;
           elem?.classList.remove('active');
           activeParticipant?.classList.add('active');
           elem = activeParticipant
        }
    })

    return (
        <>
        <Header />
        <p>{meetingId}</p>
        <button onClick={() => join()}>Join</button>
        {[...participants.keys()].map((participantId) => {
          return <ParticipantView participantId={participantId} key={participantId}/>
        })}
        </>

    )
}