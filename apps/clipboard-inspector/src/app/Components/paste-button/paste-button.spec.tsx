import { render } from "@testing-library/react";
import React from "react";
import PasteButton from "./paste-button";

describe("PasteButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PasteButton />);
    expect(baseElement).toBeTruthy();
  });
});
