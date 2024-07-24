import { Button } from "primereact/button";
import '../styles/header.css';
import { useMeeting, usePubSub } from "@videosdk.live/react-sdk";
import { Badge } from "primereact/badge";
import { copyTextToClipboard } from "../utils/helper";
import { useRef } from "react";
import Timer from "./Timer";
import { ToastElem, ToastElemModel } from "./shared/Toast";

interface HeaderProps {
   showParticipants: () => void;
   showChatView: () => void;
}

function Header({showParticipants, showChatView}: HeaderProps) {
    const toast = useRef(null);
    const {leave, toggleMic, toggleWebcam, localWebcamOn, localMicOn, participants, meetingId} = useMeeting();
    const {messages} = usePubSub('CHAT');
    const participantsExist = participants.size > 0;

    const handleCopyMeetingId = () => {
       copyTextToClipboard(meetingId)
       .then(() => {
             (toast.current as unknown as ToastElemModel).info('Copied meeting ID')
       })
    };

    return (
        <div className="header">
         <ToastElem ref={toast}/>
         <Timer />
        <div className="actions">
        <Button severity="secondary" onClick={() => handleCopyMeetingId()} tooltip='copy meeting ID' tooltipOptions={{position: "bottom"}}>
           <i className='pi pi-clipboard'></i>
        </Button>
        <Button severity="secondary" onClick={showChatView} tooltip='Chat' tooltipOptions={{position: "bottom"}}>
           <i className='pi pi-comments p-overlay-badge'>
             {messages.length > 0 && <Badge value={messages.length}></Badge>}
           </i>
        </Button>
        <Button severity="secondary" onClick={showParticipants}  tooltip='participants' tooltipOptions={{position: "bottom"}}>
           <i className='pi pi-users p-overlay-badge'>
             {participantsExist && <Badge value={participants.size}></Badge>}
           </i>
        </Button>
        <Button severity="secondary" onClick={() => toggleMic()} tooltip={localMicOn ? 'on' : 'off'} tooltipOptions={{position: "bottom"}}>
           <i className={`${localMicOn ? '' : 'mic-off'} pi pi-microphone`}></i>
        </Button>
        <Button  severity="secondary" onClick={() => toggleWebcam()} tooltip={localWebcamOn ? 'on' : 'off'} tooltipOptions={{position: "bottom"}}>
           <i className={`${localWebcamOn ? '' : 'cam-off '} pi pi-video`}></i>
        </Button>
        <Button className="p-button-danger" onClick={() => leave()}  tooltip='leave' tooltipOptions={{position: "bottom"}}>
           <i className="pi pi-phone"></i>
        </Button>
        </div>
    </div>
    )
}

export default Header;