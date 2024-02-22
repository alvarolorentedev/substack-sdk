import { Axios } from "axios";

export let requester

export const init = async (cookie: string, domain?: string) => {
    requester = new Axios({
        baseURL: domain || "https://substack.com",
        headers: {
          "accept": "*/*",
          "content-type": "application/json",
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
          cookie
        }
    })
}