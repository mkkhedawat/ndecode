import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./";

jest.mock("../../components/TextBlock", () => ({
  __esModule: true,
  default: ({ type, value }: { type: string; value: string }) => (
    <div>
      MockTextBlock-{type}-{value}
    </div>
  ),
}));

jest.mock("../../utils/background", () => ({
  init: jest.fn(),
}));

jest.mock("../../utils/transformer", () => ({
  transform: jest.fn().mockResolvedValue({}),
}));

describe("App", () => {
  test("renders correctly", () => {
    render(<App />);
    expect(require("../../utils/background").init).toHaveBeenCalled();
  });

  test("renders TextBlock components for each text block type", () => {
    render(<App />);
    expect(screen.getAllByText(/MockTextBlock-/)).toHaveLength(6);
  });
});
