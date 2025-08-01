import ConfigAPI from "../config/config";

const baseHeader = () => ({
            authorization: `${ConfigAPI.MEETING_TOKEN}`,
            "Content-Type": 'application/json'
})

export const createMeeting = async () => {
    const res = await fetch(ConfigAPI.MEETING_API as string, {
        method: 'POST',
        headers: baseHeader(),
        body: JSON.stringify({})
    })

    if (!res.ok) {
        throw new  Error("Token is expired or invalid")
    }

    const { roomId } = await res.json();
    return roomId;
}

export const getMeetingAndToken = async (id?: string | null) => {
    try {
        const roomId = !id ? await createMeeting() : await validateRoomId(id);

        return roomId;
    } catch (error: any) {
        throw error
    }
}

export const validateRoomId = async (id: string) => {
    try {
        const res = await fetch(`${ConfigAPI.VALIDATE_ID_API}/${id}`, {
            method: 'GET',
            headers: baseHeader(),
        })

        const { roomId } = await res.json();
        return roomId;
    } catch (error) {
        throw 'Room not found'
    }
}