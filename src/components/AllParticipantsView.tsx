import { useMeeting } from "@videosdk.live/react-sdk"

function AllParticipantsView() {
    const {participants, localMicOn, localParticipant} = useMeeting();

    return (
        <div className="participant-container">
        <h1 className="title">Participants</h1>
        {[...participants.values()].map((participant) => {
          return (<div key={participant.id} className="participant">
              <p className="participant__name">{participant.displayName} {participant.micOn + ''}</p>
              <i className={`pi pi-microphone ${participant.id === localParticipant.id && localMicOn ? '' : 'mic-off'}`}></i>
          </div>)
        })}
     </div>
    ) 
}

export default AllParticipantsView