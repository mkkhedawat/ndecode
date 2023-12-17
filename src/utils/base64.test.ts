import base64 from "./base64";

const testStrings = {
  decoded: "Test String",
  encoded: "VGVzdCBTdHJpbmc",
};

describe("base64", () => {
  test("encodeURL should correctly encode a string", () => {
    const encodedString = base64.encodeURL(testStrings.decoded);
    expect(encodedString).toBe(testStrings.encoded);
  });

  test("decodeURL should correctly decode a string", () => {
    const decodedString = base64.decodeURL(testStrings.encoded);
    expect(decodedString).toBe(testStrings.decoded);
  });

  test("encodeURL should handle empty string", () => {
    expect(base64.encodeURL("")).toBe("");
  });

  test("decodeURL should handle empty string", () => {
    expect(base64.decodeURL("")).toBe("");
  });
});
