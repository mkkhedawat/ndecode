// @ts-ignore
import md5 from "md5";

const sha1Hash = async (text: string) => {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-1", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  } catch (error) {
    console.error(error);
  }
  return null;
};

const md5Hash = (text: string) => {
  return md5(text);
};
const hash = {
  sha1Hash,
  md5Hash,
};

export default hash;
