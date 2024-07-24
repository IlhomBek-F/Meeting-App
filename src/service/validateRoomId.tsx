import ConfigAPI from "../config/config";

export const validateRoomId = async (id: string) => {
    try {
        const res = await fetch(`${ConfigAPI.VALIDATE_ID_API}/${id}`, {
            method: 'GET',
            headers: {
                authorization: `${ConfigAPI.MEETING_TOKEN}`,
                "Content-Type": 'application/json'
            },
        })
    
        const { roomId } = await res.json();
        return roomId;
    } catch (error) {
       throw 'Room not found'
    }
    
}