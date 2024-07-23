import { Sidebar } from "primereact/sidebar";
import '../styles/sideBar.css';
import { useMeeting } from "@videosdk.live/react-sdk";

function SideBar({visible, onHide}: {visible: boolean, onHide: () => void}) {
    const {participants} = useMeeting();
    return (
        <Sidebar visible={visible} onHide={onHide} position="right" dismissable={false} modal={false} className="side-bar" >
               <div className="participant-container">
                  <h1 className="title">Participants</h1>
                  {[...participants.values()].map((p) => {
                    return <div key={p.id} className="participant">
                        <p className="participant__name">{p.displayName}</p>
                        <i className={`${p.micOn ? '' : 'mic-off'} pi pi-microphone`}></i>
                    </div>
                  })}
               </div>
        </Sidebar>
    )
}

export default SideBar