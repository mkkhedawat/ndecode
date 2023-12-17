import transformer from "./transformer";
import { TextBlockType } from "../components/TextBlock/TextBlock.types";

describe("transformer", () => {
  const testStrings = {
    originalText: "Hello World",
    base64UrlEncoded: "SGVsbG8gV29ybGQ",
    hexEncoded: "48656c6c6f20576f726c64",
    rot13Encoded: "Uryyb Jbeyq",
    md5Hashed: "b10a8db164e0754105b7a99be72e3fe5",
    sha1Hashed: "0a4d55a8d778e5022fab701977c5d840bbc486d0",
  };

  test.each([
    [TextBlockType.BASE64_URL, testStrings.base64UrlEncoded],
    [TextBlockType.HEX, testStrings.hexEncoded],
    [TextBlockType.ROT13, testStrings.rot13Encoded],
  ])(
    "transform should correctly transform text for %s",
    async (type, encodedText) => {
      const result = await transformer.transform(type, encodedText);
      expect(result[TextBlockType.PLAIN_TEXT]).toBe(testStrings.originalText);
      expect(result[TextBlockType.BASE64_URL]).toBe(
        testStrings.base64UrlEncoded,
      );
      expect(result[TextBlockType.HEX]).toBe(testStrings.hexEncoded);
      expect(result[TextBlockType.ROT13]).toBe(testStrings.rot13Encoded);
      expect(result[TextBlockType.MD5]).toBe(testStrings.md5Hashed);
      expect(result[TextBlockType.SHA1]).toBe(testStrings.sha1Hashed);
    },
  );

  test("transform should return default values for empty string", async () => {
    const result = await transformer.transform(TextBlockType.BASE64_URL, "");
    expect(result[TextBlockType.PLAIN_TEXT]).toBe("");
    expect(result[TextBlockType.BASE64_URL]).toBe("");
    expect(result[TextBlockType.HEX]).toBe("");
    expect(result[TextBlockType.ROT13]).toBe("");
    expect(result[TextBlockType.MD5]).toBe("");
    expect(result[TextBlockType.SHA1]).toBe("");
  });
});
