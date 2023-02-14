import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configurStor';
import App from '../../App';
import HomePage from '../HomePage';
import DetailsPage from '../DetailsPage';
import HomepageHeader from '../HomePageHeader';
import DetailsPageHeader from '../DetailsPageHeader';

jest.mock('../HomePage');
jest.mock('../DetailsPage');
jest.mock('../DetailsPageHeader');

describe('Test app.js with pages', () => {
  test('should render the Home page header', () => {
    render(
      <BrowserRouter>
        <HomepageHeader />
      </BrowserRouter>,
    );
    const txt = screen.getByText('Countries Of The World', { exact: false });
    expect(txt).toBeInTheDocument();
  });
  test('should render the Details page header', () => {
    DetailsPageHeader.mockImplementation(() => <h1>Hello From Details Page Header</h1>);
    render(
      <BrowserRouter>
        <DetailsPageHeader />
      </BrowserRouter>,
    );
    const txt = screen.getByText('Hello From Details Page Header');
    expect(txt).toBeInTheDocument();
  });
  test('should render the homepage', () => {
    HomePage.mockImplementation(() => <h1>Hello From Home Page</h1>);
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const txt = screen.getByText('Hello From Home Page');
    expect(txt).toBeInTheDocument();
  });
  test('should render the Details Page', () => {
    DetailsPage.mockImplementation(() => <h1>Hello From Details Page</h1>);
    render(
      <MemoryRouter initialEntries={['/details/Anguilla']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const txt = screen.getByText('Hello From Details Page');
    expect(txt).toBeInTheDocument();
  });
});
