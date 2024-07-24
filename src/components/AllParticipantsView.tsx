import { useMeeting } from "@videosdk.live/react-sdk"

function AllParticipantsView() {
    const {participants} = useMeeting();

    return (
        <div className="participant-container">
        <h1 className="title">Participants</h1>
        {[...participants.values()].map((participant) => {
          return <div key={participant.id} className="participant">
              <p className="participant__name">{participant.displayName}</p>
              <i className={`${participant.micOn ? '' : 'mic-off '} pi pi-microphone`}></i>
          </div>
        })}
     </div>
    ) 
}

export default AllParticipantsView