import { requester } from "./initialize";

export const create = async (type: string, url: string) => {
    return await requester.post("/api/v1/comment/attachment", JSON.stringify({
        type,
        url,
    }))
}