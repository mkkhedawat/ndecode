import base64url from "base64url";
import { Buffer } from "buffer";

window.Buffer = window.Buffer || Buffer;

const encodeURL = (text: string) => {
  return base64url.encode(text);
};

const decodeURL = (text: string) => {
  return base64url.decode(text);
};

const base64 = {
  encodeURL,
  decodeURL,
};

export default base64;
