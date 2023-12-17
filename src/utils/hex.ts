import { Buffer } from "buffer";

window.Buffer = window.Buffer || Buffer;

const encode = (text: string) => {
  return Buffer.from(text, "utf-8").toString("hex");
};

const decode = (hex: string) => {
  return Buffer.from(hex, "hex").toString("utf-8");
};

const hex = {
  encode,
  decode,
};

export default hex;
