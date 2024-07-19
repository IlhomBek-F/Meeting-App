import { useEffect, useState } from "react";
import Header from "./Header";
import { useMeeting } from "@videosdk.live/react-sdk";
import ParticipantView from "./ParticipantView";

export default function MeetingView({onMeetingLeave}: any) {
    const [joined, setJoin] = useState<boolean>();

    const {join, participants, meetingId} = useMeeting({
        onMeetingJoined: () => {
            setJoin(true)
        },
        onMeetingLeft: () => {
            onMeetingLeave();
        },
    })

    console.log(participants)

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