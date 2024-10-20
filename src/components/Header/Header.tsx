import React from "react";
import { useRef } from "react";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { useMeeting, usePubSub } from "@videosdk.live/react-sdk";
import { ToastElem, ToastElemModel } from "../../shared/Toast/Toast";
import { copyTextToClipboard } from "../../utils/helper";
import Timer from "../Timer/Timer";
import './header.css';

type HeaderProps = {
   showParticipants: () => void;
   showChatView: () => void;
}

function Header({showParticipants, showChatView}: HeaderProps) {
    const toast = useRef(null);
    const {messages} = usePubSub('CHAT');
    const {leave, toggleMic, toggleWebcam,disableScreenShare, enableScreenShare, 
      localWebcamOn, localScreenShareOn, localMicOn, participants, meetingId} = useMeeting();
    const participantsExist = participants.size > 0;

    const handleCopyMeetingId = () => {
      const url = window.location.href;
       copyTextToClipboard(`${url}?id=${meetingId}`)
       .then(() => {
             (toast.current as unknown as ToastElemModel).info('Share Url with your friend')
       })
    };

    const handleWebCam = () => {
       if(localScreenShareOn) {
            disableScreenShare()
       }
       toggleWebcam();
    }

    return (
        <div className="header">
         <ToastElem ref={toast}/>
         <Timer />
        <div className="actions">
        {localScreenShareOn && <Button severity="secondary" onClick={() => disableScreenShare()} tooltip='stop sharing' tooltipOptions={{position: "bottom"}}>
           <i className='pi pi-stop-circle'></i>
        </Button>
         }
        <Button severity="secondary" onClick={() => enableScreenShare()} tooltip='share screen' tooltipOptions={{position: "bottom"}}>
           <i className={`${localScreenShareOn ? '' : 'cam-off '} pi pi-desktop`}></i>
        </Button>
        <Button severity="secondary" onClick={() => handleCopyMeetingId()} tooltip='copy meeting url' tooltipOptions={{position: "bottom"}}>
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
        <Button  severity="secondary" onClick={handleWebCam} tooltip={localWebcamOn ? 'on' : 'off'} tooltipOptions={{position: "bottom"}}>
           <i className={`${localWebcamOn ? '' : 'cam-off '} pi pi-video`}></i>
        </Button>
        <Button className="p-button-danger" onClick={() => leave()}  tooltip='leave' tooltipOptions={{position: "bottom"}}>
           <i className="pi pi-phone"></i>
        </Button>
        </div>
    </div>
    )
}

export default React.memo(Header);
