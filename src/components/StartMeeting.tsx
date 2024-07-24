import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useRef } from "react"

interface CreateMeetingProps {
    startMeeting: (meetingId: string) => void;
    setName: (name: string) => void;
    loading: boolean
}

function StartMeeting({startMeeting, setName, loading}: CreateMeetingProps) {
    const inputRef = useRef<HTMLInputElement>(null);
  
    const handleMeetingId = () => {
        const roomId = (inputRef.current as HTMLInputElement).value;
        startMeeting(roomId)
    }

    return (
        <main className="join-container">
          <div className="container">
                <h1>Join or Create Meeting</h1>
                <p>Enter your meeting code or create a new meeting</p>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                    <i className="pi pi-user" />
                    <InputText placeholder="Your name" required={true} onChange={(e) => setName(e.target.value)}/>
                    </span>
                    <span className="p-inputgroup-addon">
                    <i className="pi pi-key" />
                    <InputText ref={inputRef} placeholder="Meeting Code" />
                    </span>
                </div>
                <Button loading={loading} label="Join/Create Meeting" className=" p-button-info join-btn" onClick={handleMeetingId}/>
          </div>
        </main>
    )
}

export {StartMeeting}