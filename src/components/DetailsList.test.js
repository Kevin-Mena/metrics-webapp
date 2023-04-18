import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailsList from "./DetailsList";

const mockStore = configureStore([]);

describe("DetailsList", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      countries: {
        countriesList: [
          {
            flag: "mock_flag",
            name: {
              common: "Mock Country",
            },
            capital: "Mock Capital",
            population: 10000000,
            status: "Mock Status",
            region: "Mock Region",
            subregion: "Mock Subregion",
            area: 1000000,
            timezones: "Mock Timezones",
            continents: "Mock Continents",
            flags: {
              png: "mock.png",
              alt: "Mock Flag Description",
            },
            startOfWeek: "Mock Start of Week",
            car: {
              side: "Mock Car Side",
            },
          },
        ],
        isLoading: false,
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/details/mock_flag"]}>
          <Routes>
            <Route path="/details/:countryId" element={<DetailsList />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  });

  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
