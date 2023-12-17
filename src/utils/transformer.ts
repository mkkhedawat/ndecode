import { TextBlockType } from "../components/TextBlock/TextBlock.types";
import base64 from "./base64";
import hash from "./hash";
import hex from "./hex";
import rot from "./rot";

const defaultError = "Invalid Text";

const getPlainText = (type: TextBlockType, text: string): string | null => {
  switch (type) {
    case TextBlockType.BASE64_URL:
      return base64.decodeURL(text);
    case TextBlockType.HEX:
      return hex.decode(text);
    case TextBlockType.ROT13:
      return rot.rot13(text);
  }
  return null;
};

const transform = async (type: TextBlockType, text: string) => {
  if (!text)
    return {
      [TextBlockType.PLAIN_TEXT]: "",
      [TextBlockType.HEX]: "",
      [TextBlockType.BASE64_URL]: "",
      [TextBlockType.ROT13]: "",
      [TextBlockType.MD5]: "",
      [TextBlockType.SHA1]: "",
    };

  const data = {
    [TextBlockType.PLAIN_TEXT]: defaultError,
    [TextBlockType.HEX]: defaultError,
    [TextBlockType.BASE64_URL]: defaultError,
    [TextBlockType.ROT13]: defaultError,
    [TextBlockType.MD5]: defaultError,
    [TextBlockType.SHA1]: defaultError,
    [type]: text,
  };

  if (type !== TextBlockType.PLAIN_TEXT) {
    const plainText = getPlainText(type, text);
    if (!plainText) {
      data[TextBlockType.PLAIN_TEXT] = defaultError;
      return data;
    }
    data[TextBlockType.PLAIN_TEXT] = plainText;
  }

  // BASE64 URL
  if (type !== TextBlockType.BASE64_URL) {
    data[TextBlockType.BASE64_URL] = base64.encodeURL(
      data[TextBlockType.PLAIN_TEXT],
    );
  }

  // HEX
  if (type !== TextBlockType.HEX) {
    data[TextBlockType.HEX] = hex.encode(data[TextBlockType.PLAIN_TEXT]);
  }

  // ROT13
  if (type !== TextBlockType.ROT13) {
    data[TextBlockType.ROT13] = rot.rot13(data[TextBlockType.PLAIN_TEXT]);
  }

  // Hash
  data[TextBlockType.MD5] = hash.md5Hash(data[TextBlockType.PLAIN_TEXT]);
  data[TextBlockType.SHA1] =
    (await hash.sha1Hash(data[TextBlockType.PLAIN_TEXT])) || defaultError;

  return data;
};

const transformer = {
  transform,
};

export default transformer;
