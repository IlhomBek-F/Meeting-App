import { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import ParticipantView from "./ParticipantView";
import '../styles/meetingView.css';
import ReactPlayer from "react-player";
import useVideoStream from "../hooks/useVideoStream";
import Player from "./Player";

let elem: HTMLElement;

export default function MeetingView({onMeetingLeave}: any) {
    const {join, participants, meetingId, toggleScreenShare, localParticipant} = useMeeting({
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

    const local = [...participants.values()].find((p) => !!p.local)
    const videoStream = useVideoStream(local?.id);
    
    return (
        <>
        <Header />
        <p>{meetingId}</p>
        <button onClick={() => join()}>Join</button>
        <button onClick={() => toggleScreenShare()}>screenShare</button>
        <div>
        {local?.id &&  <Player id={local?.id} videoStream={videoStream}/> }
        </div>
        <div className="participants-container">
        {[...participants.keys()].map((participantId) => {
            return <ParticipantView participantId={participantId} key={participantId}/>
        })}
        </div>
        </>

    )
}