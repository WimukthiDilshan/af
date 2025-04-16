import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Custom render function that includes common providers
const customRender = (ui, options = {}) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <BrowserRouter>
        {children}
      </BrowserRouter>
    ),
    ...options,
  });
};

// Re-export everything from testing-library
export * from '@testing-library/react';

// Override render method
export { customRender as render }; 