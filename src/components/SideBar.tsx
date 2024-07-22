import { useMeeting } from "@videosdk.live/react-sdk";
import { Sidebar } from "primereact/sidebar";
import '../styles/sideBar.css';

function SideBar({visible, onHide}: {visible: boolean, onHide: () => void}) {
    const {participants} = useMeeting();

    return (
        <Sidebar visible={visible} onHide={onHide} position="bottom" dismissable={false} modal={false} className="side-bar">
               <div className="participant-container">
               {['as', 'asd', 'as', 'as', 'asd', 'as',, 'as',].map((displayName) => {
                return <div className="participant">
                   {displayName}
                </div>
               })}
               </div>
        </Sidebar>
    )
}

export default SideBar