import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import DetailsList from "./DetailsList";

// mock useSelector hook
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("DetailsList component", () => {
  beforeEach(() => {
    useSelector.mockImplementation((selectorFn) =>
      selectorFn({
        countries: {
          countriesList: [
            {
              flag: "test-flag",
              name: { common: "Test Country" },
              capital: "Test Capital",
              population: 1000000,
              status: "Test Status",
              region: "Test Region",
              subregion: "Test Subregion",
              area: 100000,
              timezones: ["Test Timezone"],
              continents: ["Test Continent"],
              flags: { png: "test-flag.png", alt: "Test Flag Description" },
              startOfWeek: "Test Start of Week",
              car: { side: "Test Car Side" },
            },
          ],
          isLoading: false,
        },
      })
    );
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it("should render correctly", () => {
    const { asFragment } = render(<DetailsList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
