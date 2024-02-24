import { requester } from "./initialize";

export const upload = async (image: string) => {
    return JSON.parse((await requester.post("/api/v1/image", JSON.stringify({
        image
    }))).data)
}