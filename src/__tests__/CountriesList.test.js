import React from "react";
import { render } from "@testing-library/react";
import CountriesList from "./CountriesList";

describe("CountriesList component", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<CountriesList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
