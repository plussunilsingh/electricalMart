import { describe, it, expect } from 'vitest';
import productsData from '../src/data/products.json';
import { APP_CONFIG } from '../src/config/appConfig';

describe('Data Integrity Tests', () => {
  it('should have a valid products.json', () => {
    expect(Array.isArray(productsData)).toBe(true);
    expect(productsData.length).toBeGreaterThan(0);
  });

  it('each product should have critical fields', () => {
    productsData.forEach((product) => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
      expect(typeof product.price).toBe('number');
      expect(product.price).toBeGreaterThan(0);
      expect(product).toHaveProperty('category');
    });
  });

  it('appConfig should have valid support contact info', () => {
    expect(APP_CONFIG).toHaveProperty('businessEmail');
    expect(APP_CONFIG).toHaveProperty('whatsAppNumber');
    expect(APP_CONFIG.whatsAppNumber.length).toBeGreaterThan(5);
  });
});
