const rot13 = (text: string): string => {
  return text
    .split("")
    .map((char) => {
      const isLowerCase = char >= "a" && char <= "z";
      const isUpperCase = char >= "A" && char <= "Z";

      if (isLowerCase || isUpperCase) {
        const charCode = char.charCodeAt(0);
        const base = isLowerCase ? "a".charCodeAt(0) : "A".charCodeAt(0);
        return String.fromCharCode(((charCode - base + 13) % 26) + base);
      }

      return char;
    })
    .join("");
};

const rot = {
  rot13,
};

export default rot;
