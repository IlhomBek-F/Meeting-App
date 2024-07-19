import ConfigAPI from "../config/config";


export const createMeeting = async () => {
    const res = await fetch(ConfigAPI.MEETING_API as string, {
        method: 'POST',
        headers: {
            authorization: `${ConfigAPI.MEETING_TOKEN}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({})
    })

    const { roomId } = await res.json();
    return roomId;
}