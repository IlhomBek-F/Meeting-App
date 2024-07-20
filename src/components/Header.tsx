import { Button } from "primereact/button";
import '../styles/header.css';
import logo from '../assets/logo.png';
import { useMeeting } from "@videosdk.live/react-sdk";

function Header() {
    const {leave, toggleMic, toggleWebcam, localWebcamOn, localMicOn} = useMeeting();

    return (
        <div className="header">
        <img src={logo} className="logo"/>
        <div className="actions">
        <Button severity="secondary" onClick={() => toggleMic()}>
           <p className={`${localMicOn ? '' : 'mic-off'} pi pi-microphone`}></p>
        </Button>
        <Button  severity="secondary" onClick={() => toggleWebcam()}>
           <p className={`${localWebcamOn ? '' : 'cam-off '} pi pi-video`}></p>
        </Button>
        <Button className="p-button-danger" onClick={() => leave()}>
           <p className="pi pi-phone"></p>
        </Button>
        </div>
    </div>
    )
}

export default Header;