import { createMeeting } from "./createMeeting";
import { validateRoomId } from "./validateRoomId";

export const getMeetingAndToken = async (id?: string | null) => {
    try {
        const roomId = !id ? await createMeeting() : await validateRoomId(id);

        return roomId;
    } catch (error: any) {
        throw error
    }
}