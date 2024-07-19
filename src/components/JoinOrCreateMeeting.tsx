import { useMeeting } from "@videosdk.live/react-sdk"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { MutableRefObject, useRef } from "react"

function JoinOrCreateMeeting({getMeetingToken}: {getMeetingToken: (id: string | null) => void}) {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleMeetingId = () => {
        const meetingId = (inputRef.current as HTMLInputElement).value
        getMeetingToken(meetingId)
    }
    return (
        <div className="container">
                <h1>Join or Create Meeting</h1>
                <p>Enter your meeting code or create a new meeting</p>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-key" />
                    </span>
                    <InputText ref={inputRef} placeholder="Meeting Code" />
                </div>
                <Button label="Join/Create Meeting" className="p-button-rounded p-button-info join-btn" onClick={() => handleMeetingId()}/>
        </div>
    )
}

export {JoinOrCreateMeeting}