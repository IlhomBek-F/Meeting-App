import { Button } from "primereact/button";
import '../styles/header.css';
import logo from '../assets/logo.png';
import { useMeeting } from "@videosdk.live/react-sdk";
import { Badge } from "primereact/badge";

function Header({showParticipants}: {showParticipants: () => void}) {
    const {leave, toggleMic, toggleWebcam, localWebcamOn, localMicOn, participants} = useMeeting();
    const participantsExist = participants.size > 0;
    return (
        <div className="header">
        <img src={logo} className="logo"/>
        <div className="actions">
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