import { requester } from "./initialize";

export const retrieve = async (limit: number, offset: number) => {
    const response = await requester.post("/api/v1/subscriber-stats", JSON.stringify({
        limit,
        offset
    }));
    return JSON.parse(response.data)
}