import { render } from "@testing-library/react";
import React from "react";

import ClipboardItemListComponent from "./clipboard-item-list-component";

describe("ClipboardItemListComponent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ClipboardItemListComponent />);
    expect(baseElement).toBeTruthy();
  });
});
