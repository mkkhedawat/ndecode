import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TextBlock from "./index";

describe("TextBlock", () => {
  test("renders correctly", () => {
    render(<TextBlock value="Test" />);
    expect(
      screen.getByPlaceholderText(/Click to edit.../i),
    ).toBeInTheDocument();
  });

  test("calls onChange handler when text changes", () => {
    const mockOnChange = jest.fn();
    render(<TextBlock value="" onChange={mockOnChange} />);
    const textarea = screen.getByPlaceholderText(/Click to edit.../i);
    fireEvent.change(textarea, { target: { value: "New text" } });
    expect(mockOnChange).toHaveBeenCalledWith("New text");
  });

  test("handles copy action correctly", () => {
    const mockWriteText = jest.fn();

    // @ts-ignore
    global.navigator.clipboard = { writeText: mockWriteText };

    render(<TextBlock value="Copy this text" />);
    const copyButton = screen.getByTitle(/click to copy/i);
    fireEvent.click(copyButton);
    expect(mockWriteText).toHaveBeenCalledWith("Copy this text");
  });

  test("renders as read-only when readOnly prop is true", () => {
    render(<TextBlock value="Read Only" readOnly />);
    const textarea = screen.getByPlaceholderText("");
    expect(textarea).toHaveAttribute("readOnly");
  });
});
