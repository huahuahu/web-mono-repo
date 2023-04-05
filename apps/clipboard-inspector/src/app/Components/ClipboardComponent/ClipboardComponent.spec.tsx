import React from "react";
import { render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import ClipboardComponent from "./ClipboardComponent";

describe("ClipboardComponent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <ClipboardComponent />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
