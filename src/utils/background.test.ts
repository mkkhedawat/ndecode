import background from "./background";

document.body.innerHTML = '<div class="background-container"></div>';

describe("background", () => {
  test("init should only initialize once", () => {
    background.init();
    background.init();
    const icons = document.querySelectorAll(".material-symbols-rounded");
    expect(icons.length).toBe(50);
  });

  test("init should create specified number of icons in container", () => {
    background.init();
    const container = document.querySelector(".background-container");
    const icons = container?.querySelectorAll(".material-symbols-rounded");
    expect(icons?.length).toBe(50);
  });

  test("created icons should have correct styles and classes", () => {
    background.init();
    const icon = document.querySelector(".material-symbols-rounded");
    expect(icon).toHaveStyle("position: absolute");
    expect(icon).toHaveStyle("zIndex: -1");
    expect(icon).toHaveStyle("opacity: 0.77");
    expect(icon).toHaveStyle("pointerEvents: none");
  });
});
