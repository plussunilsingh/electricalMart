import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../src/components/Header';
import { CartProvider } from '../src/context/CartContext';
import { APP_CONFIG } from '../src/config/appConfig';

// Testing Scenario A: UI/UX Global Header Loads 
describe('UI/UX Header Component Scenario', () => {
  it('renders the branding name correctly from appConfig without crashing', () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Header />
        </CartProvider>
      </MemoryRouter>
    );
    
    const firstWord = APP_CONFIG.websiteName.split(' ')[0];
    expect(screen.getByText(firstWord)).toBeDefined();
  });

  it('renders the search input accessibility', () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Header />
        </CartProvider>
      </MemoryRouter>
    );
    
    // Testing mobile menu aria rendering implicitly if required, verifying search box load
    const searchInputs = screen.getAllByPlaceholderText(/Search products/i);
    expect(searchInputs.length).toBeGreaterThan(0);
  });
});
