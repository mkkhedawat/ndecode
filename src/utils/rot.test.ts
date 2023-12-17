import rot from "./rot";

describe("rot", () => {
  test("rot13 should correctly shift alphabetic characters", () => {
    expect(rot.rot13("Hello World")).toBe("Uryyb Jbeyq");
    expect(rot.rot13("Uryyb Jbeyq")).toBe("Hello World");
  });

  test("rot13 should leave non-alphabetic characters unchanged", () => {
    expect(rot.rot13("123")).toBe("123");
    expect(rot.rot13("!@#")).toBe("!@#");
  });

  test("rot13 should handle empty string", () => {
    expect(rot.rot13("")).toBe("");
  });

  test("applying rot13 twice returns the original string", () => {
    const original = "Test String";
    const once = rot.rot13(original);
    const twice = rot.rot13(once);
    expect(twice).toBe(original);
  });
});
