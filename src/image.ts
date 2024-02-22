import { requester } from "./initialize";

export const upload = async (image: string) => {
    return await requester.post("/api/v1/image", JSON.stringify({
        image
    }))
}