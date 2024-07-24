import Header from "./Header";
import { useMeeting } from "@videosdk.live/react-sdk";
import '../styles/meetingView.css';
import ParticipantScreen from "./ParticipantScreen";
import ParticipantView from "./ParticipantView";
import SideBar from "./shared/SideBar";
import { useState } from "react";
import AllParticipantsView from "./AllParticipantsView";
import ChatView from "./ChatView";
enum SideBarType {
    CHAT = 'chat',
    PARTICIPANT = 'participant'
}
let elem: HTMLElement;

export default function MeetingView({onMeetingLeave}: any) {
    const [showParticipants, setVisble] = useState(false);
    const [showChatView, setChatView] = useState(false);

    const {participants} = useMeeting({
        onMeetingJoined() {
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

    const handleHideSideBar = () => {
        if(showChatView) {
            setChatView(false)
        }else if(showParticipants) {
            setVisble(false);
        }
    }

    const handleOpenSideBar = (sideBarType: SideBarType) => {
        if(sideBarType === SideBarType.CHAT) {
            setChatView(true)
            setVisble(false)
        }else if(sideBarType === SideBarType.PARTICIPANT) {
            setVisble(true)
            setChatView(false)
        }else {
            setVisble(false)
            setChatView(false)
        }
    }

    return (
        <>
        <Header showParticipants={() => handleOpenSideBar(SideBarType.PARTICIPANT)} showChatView={() => handleOpenSideBar(SideBarType.CHAT)}/>        <ParticipantScreen>
        {[...participants.keys()].slice(0, 12).map((participantId) => {
            return <div className="person" key={participantId}>
                <ParticipantView participantId={participantId} />
            </div>
        })}
        </ParticipantScreen>
        <SideBar visible={showChatView || showParticipants} onHide={handleHideSideBar}>
            {showChatView ? <ChatView /> : <AllParticipantsView />}
        </SideBar>
        </>

    )
}