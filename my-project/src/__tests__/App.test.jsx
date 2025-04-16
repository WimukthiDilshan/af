import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// Mock the components that App.jsx might be using
jest.mock('../components/Header', () => () => <div data-testid="mock-header">Header</div>);
jest.mock('../components/Footer', () => () => <div data-testid="mock-footer">Footer</div>);

describe('App Component', () => {
  const renderApp = () => {
    return render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  };

  it('renders without crashing', () => {
    renderApp();
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });

  // Add more specific tests based on your App component's functionality
  it('renders main content area', () => {
    renderApp();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
}); 