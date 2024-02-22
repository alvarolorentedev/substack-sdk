
import { upload } from "./image";
import { init } from "./initialize";
import { create } from "./note";
import { create as createAttachment } from "./attachment";
Object.assign(module.exports, {init, note: {create}, image: {upload}, attachment: {create: createAttachment}});
