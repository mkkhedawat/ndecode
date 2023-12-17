import hex from "./hex";

const testStrings = {
  original: "Hello World",
  hexEncoded: "48656c6c6f20576f726c64",
};

describe("hex", () => {
  test("encode should correctly encode a string to hex", () => {
    const encodedString = hex.encode(testStrings.original);
    expect(encodedString).toBe(testStrings.hexEncoded);
  });

  test("decode should correctly decode a hex string", () => {
    const decodedString = hex.decode(testStrings.hexEncoded);
    expect(decodedString).toBe(testStrings.original);
  });

  test("encode should handle empty string", () => {
    expect(hex.encode("")).toBe("");
  });

  test("decode should handle empty string", () => {
    expect(hex.decode("")).toBe("");
  });
});
