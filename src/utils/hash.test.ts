import hash from "./hash";

describe("hash", () => {
  test("sha1Hash should correctly compute SHA-1 hash", async () => {
    const text = "Hello World";
    const expectedSha1 = "0a4d55a8d778e5022fab701977c5d840bbc486d0";
    const computedSha1 = await hash.sha1Hash(text);
    expect(computedSha1).toBe(expectedSha1);
  });

  test("md5Hash should correctly compute MD5 hash", () => {
    const text = "Hello World";
    const expectedMd5 = "b10a8db164e0754105b7a99be72e3fe5";
    const computedMd5 = hash.md5Hash(text);
    expect(computedMd5).toBe(expectedMd5);
  });

  test("sha1Hash should handle empty string", async () => {
    const expectedSha1Empty = "da39a3ee5e6b4b0d3255bfef95601890afd80709";
    const computedSha1Empty = await hash.sha1Hash("");
    expect(computedSha1Empty).toBe(expectedSha1Empty);
  });

  test("md5Hash should handle empty string", () => {
    const expectedMd5Empty = "d41d8cd98f00b204e9800998ecf8427e";
    const computedMd5Empty = hash.md5Hash("");
    expect(computedMd5Empty).toBe(expectedMd5Empty);
  });
});
