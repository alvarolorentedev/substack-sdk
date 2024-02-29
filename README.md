# ![18jCAY-LogoMakr](https://github.com/alvarolorentedev/substack-sdk/assets/3071208/6ead70e0-77a4-4f76-bfd5-f2581cac65ce) Substack SDK

[![npm](https://img.shields.io/npm/dt/substack-sdk.svg)](https://github.com/alvarolorentedev/substack-sdk)
[![GitHub license](https://img.shields.io/github/license/alvarolorentedev/substack-sdk.svg)](https://github.com/alvarolorentedev/substack-sdk/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/alvarolorentedev/substack-sdk/graphs/commit-activity)

## Motivation

Provide an typescript async promise based unofficial sdk for substack platform.

## Installation

add it to your project using `npm install substack-sdk --save` or `yarn add substack-sdk`

## Usage

this sdk provide functions realated to various substack objects

### Authorization

Before any use you will require to initialize this SDK by copying the cookie to initialize any type of transaction.

```ts
import substack from "substack-sdk"

const cookie = "your substack cookie"
substack.init(cookie)
```

### Images

#### Upload

to upload an image you need to pass the base64 representation of it to the `image.upload` method. As seen on the next example:
```ts
import substack from "substack-sdk"

const imageString = `base64 representation of the image
ex: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAk0AAAJUCAIAAACHQYVcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nOy9WXMc130+fLpn3/...`

const uploadImageRespose = await substack.image.upload(imageString)

```


### Attachemnts

#### add

Attachments are used as references to files (uploaded) and links that will be referenced in other objects we will se further on in this library.

The first parameter will be the type of the attachment (`image` or `link`), that will be the url passed in the secont parameter.

```ts
import substack from "substack-sdk"

const attachmentResponse = await substack.attachment.create("image",uploadImageRespose.url)
const attachmentResponse2 = await substack.attachment.create("link","https://www.alvarolorente.dev/blog/2024/02/14/leaders-build-trust-managers-take-control-the-path-to-empowering-teams")

```

### Notes

This is the simplest type of user interactive object, where you can use the attachments defined in the previous section.

The first parameter is an array of contents of the next types: 
```ts
type Text = {
    message: string
}

type Link = {
    url: string
    text: string
}


type Content = Link | Text
```
The second parameter and will be an array of the attachment ids that whant to be link in this Note 
```ts

import substack from "substack-sdk"

const createNoteRespose = await substack.note.create([
    { message: "Hello World" },
    { 
        text: "awesome post",
        url: "https://www.alvarolorente.dev/blog/2024/02/14/leaders-build-trust-managers-take-control-the-path-to-empowering-teams"
    }
], [attachmentResponse.id, attachmentResponse2.id])
```

## Roadmap

- [x] Images
- [x] Notes
- [x] Attachments
- [ ] Threads
- [ ] Subscribers
- [ ] Articles
- ...

##### Logo created using logomkr. Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Makr">LogoMakr.com</a> https://logomakr.com/7cJ0NM