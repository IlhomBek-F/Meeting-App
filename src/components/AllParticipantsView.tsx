import { useMeeting } from "@videosdk.live/react-sdk"

function AllParticipantsView() {
    const {participants} = useMeeting();

    return (
        <div className="participant-container">
        <h1 className="title">Participants</h1>
        {[...participants.values()].map((p) => {
          return <div key={p.id} className="participant">
              <p className="participant__name">{p.displayName}</p>
              <i className={`${p.micOn ? '' : 'mic-off '} pi pi-microphone`}></i>
          </div>
        })}
     </div>
    ) 
}

export default AllParticipantsView