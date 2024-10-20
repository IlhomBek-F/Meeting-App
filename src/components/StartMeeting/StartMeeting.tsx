import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useState } from "react"
import './startMeeting.css';

type CreateMeetingProps = {
    startMeeting: (meetingId: string) => void;
    setRoom: (data: any) => void;
    loading: boolean
}

function StartMeeting({startMeeting, setRoom, loading}: CreateMeetingProps) {
    const id = new URLSearchParams(window.location.search).get('id');
    const [roomId, setRoomId] = useState<string>(id as string);

    const handleMeetingId = () => {
        startMeeting(roomId)
    }

    return (
        <main className="join-container">
          <div className="container">
                <h1>Join or Create Meeting</h1>
                <p>Enter your meeting code or create a new meeting</p>
                <div className="p-inputgroup mb-[25px] flex flex-col gap-[10px]">
                    <span className="p-input-group-addon">
                    <i className="pi pi-user py-0 px-[15px]" />
                    <InputText className="p-input-text" 
                    placeholder="Your name" required={true} onChange={(e) => setRoom((prev: any) => ({...prev , name: e.target.value}))}/>
                    </span>
                    <span className="p-input-group-addon">
                    <i className="pi pi-key py-0 px-[15px]" />
                    <InputText value={roomId} className="p-input-text" onChange={(e) => setRoomId(e.target.value)}
                                          placeholder="Meeting Code" />
                    </span>
                </div>
                <Button loading={loading} label="Join/Create Meeting" 
                 className="bg-[#1E90FF] w-[100%] border-[#1E90FF] text-[#fff] p-button-infow-[100%] hover:bg-[#1C86EE]" onClick={handleMeetingId}/>
          </div>
        </main>
    )
}

export {StartMeeting}
