import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import CountriesList from './CountriesList';

const mockStore = configureStore([]);

describe('CountriesList', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      countries: {
        countriesList: [
          {
            name: { common: 'United States' },
            flags: { png: 'us.png', alt: 'US flag' },
            population: 331449281,
            flag: 'us',
          },
          {
            name: { common: 'Canada' },
            flags: { png: 'ca.png', alt: 'Canada flag' },
            population: 38005238,
            flag: 'ca',
          },
        ],
        isLoading: false,
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <CountriesList />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('should match the snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
