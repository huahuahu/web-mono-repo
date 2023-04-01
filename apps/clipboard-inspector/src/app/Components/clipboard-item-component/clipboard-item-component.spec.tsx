import { render } from "@testing-library/react";
import React from "react";

import ClipboardItemComponent from "./clipboard-item-component";

describe("ClipboardItemComponent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ClipboardItemComponent />);
    expect(baseElement).toBeTruthy();
  });
});
