import { requester } from "./initialize";

export const create = async (type: string, url: string) => {
    return JSON.parse((await requester.post("/api/v1/comment/attachment", JSON.stringify({
        type,
        url,
    }))).data)
}