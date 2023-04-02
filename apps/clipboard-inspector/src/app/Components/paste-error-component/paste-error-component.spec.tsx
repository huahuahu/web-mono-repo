import { render } from "@testing-library/react";
import React from "react";

import PasteErrorComponent from "./paste-error-component";

describe("PasteErrorComponent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <PasteErrorComponent
        error={new Error("error")}
        onDismiss={() => {
          console.log("dismissed");
          return false;
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
