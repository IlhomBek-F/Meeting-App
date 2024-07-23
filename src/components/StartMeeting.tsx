import { useMeeting } from "@videosdk.live/react-sdk";
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useRef, useState } from "react"

interface CreateMeetingProps {
    setRoomId: (id: string) => void;
    getMeetingToken: (meetingId?: string) => Promise<any>;
}

function StartMeeting({getMeetingToken, setRoomId}: CreateMeetingProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const {join} = useMeeting();
    const [loading, setLoading] = useState(false);

    const handleMeetingId = () => {
        const roomId = (inputRef.current as HTMLInputElement).value;
        setLoading(true)
        getMeetingToken(roomId)
        .then((id) => {
            setRoomId(id);
            setTimeout(join, 10)
        }).finally(() => setLoading(false))
    };

    return (
        <main className="join-container">
          <div className="container">
                <h1>Join or Create Meeting</h1>
                <p>Enter your meeting code or create a new meeting</p>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-key" />
                    </span>
                    <InputText ref={inputRef} placeholder="Meeting Code" />
                </div>
                <Button loading={loading} label="Join/Create Meeting" className="p-button-rounded p-button-info join-btn" onClick={() => handleMeetingId()}/>
          </div>
        </main>
    )
}

export {StartMeeting}