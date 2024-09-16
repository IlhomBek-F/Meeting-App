import Header from "../Header/Header";
import { useMeeting } from "@videosdk.live/react-sdk";
import ParticipantScreen from "../ParticipantScreen/ParticipantScreen";
import ParticipantView from "../ParticipantView/ParticipantView";
import SideBar from "../../shared/SideBar/SideBar";
import { useCallback, useState } from "react";
import AllParticipantsView from "../AllParticipantsView/AllParticipantsView";
import ChatView from "../ChatView/ChatView";
import './meetingView.css';

let elem: HTMLElement;

export default function MeetingView({onMeetingLeave}: {onMeetingLeave: () => void}) {
    const [sideBarState, setSideBarState] = useState({
        chat: false,
        participants: false
    })

    const {participants} = useMeeting({
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

    const handleHideSideBar = () => {
        setSideBarState({
          chat: false,
          participants: false
        })
    }

    const openParticipantsView = useCallback(() => {
        setSideBarState({
            chat: false,
            participants: true
        })
    }, []);

    const openChatView = useCallback(() => {
        setSideBarState({
            chat: true,
            participants: false
        })
    }, [])

    return (
    <>
        <Header showParticipants={openParticipantsView} showChatView={openChatView}/>        
        <ParticipantScreen>
            {[...participants.keys()].slice(0, 12).map((participantId) => (
                  <ParticipantView participantId={participantId} key={participantId} />
            ))}
        </ParticipantScreen>
        <SideBar visible={sideBarState.chat} onHide={handleHideSideBar} children={<ChatView />} />
        <SideBar visible={sideBarState.participants} onHide={handleHideSideBar} children={<AllParticipantsView />} />
    </>
    )
}