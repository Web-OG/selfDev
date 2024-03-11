import i18n from 'i18next';
import {getCurrentLanguage} from './getCurrentLanguage';
import {cleanup} from '@testing-library/react';

describe('getCurrentLanguage', () => {
  afterEach(() => cleanup());

  it('should return fallback language', () => {
    expect(getCurrentLanguage()).toBe('ru');
  });

  it('should return language from localStorage', () => {
    window.localStorage.setItem('i18nextLng', JSON.stringify('en'));
    expect(getCurrentLanguage()).toBe('en');
    window.localStorage.clear();
  });

  it('should return language from i18n.language', () => {
    i18n.language = 'en';
    expect(getCurrentLanguage()).toBe('en');
  });
});
