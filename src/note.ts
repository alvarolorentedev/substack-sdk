import { requester } from "./initialize";

type Text = {
    message: string
}

type Link = {
    url: string
    text: string
}


type Content = Link | Text

function isLink(content: Content): content is Link {
    return (content as Link).url !== undefined;
}

function isText(content: Content): content is Text {
    return (content as Text).message !== undefined;
}

export const create = async (contents: Content[], attachmentIds?: string[]) => {
    const body = JSON.stringify({
        attachmentIds,
        "bodyJson": {
            "type": "doc",
            "attrs": {
                "schemaVersion": "v1"
            },
            "content": contents.map((content: Content) =>{
                return {
                    "type": "paragraph",
                    "content": isLink(content)
                        ? [
                            {
                              "type": "text",
                              "marks": [
                                {
                                  "type": "link",
                                  "attrs": {
                                    "href": content.url,
                                    "target": "_blank",
                                    "rel": "nofollow ugc noopener",
                                    "class": "note-link"
                                  }
                                }
                              ],
                              "text": content.text
                            }
                        ]
                        : [
                            {
                                "type": "text",
                                "text": content.message
                            }
                        ]
                }
        })
        },
        "tabId": "for-you",
        "replyMinimumRole": "everyone"
    })
    console.log(body);
    
    return JSON.parse((await requester.post("/api/v1/comment/feed", body)).data)
}