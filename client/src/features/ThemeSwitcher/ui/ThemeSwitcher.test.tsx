import {cleanup, fireEvent, screen} from '@testing-library/react';
import {ThemeSwitcher} from './ThemeSwitcher';
import {renderComponentWithProviders} from '@/shared/lib/components/testing/renderComponentWithProviders';

describe('ThemeSwitcher', () => {
  afterEach(() => cleanup());

  it('render', () => {
    renderComponentWithProviders(<ThemeSwitcher/>, {localStorage: {theme: 'app_light_theme'}});
    const toggleBtn = screen.getByTestId('toggle');
    const indicator = screen.getByTestId('indicator');

    expect(toggleBtn).toBeInTheDocument();
    expect(toggleBtn).toHaveClass('button');
    expect(toggleBtn).toHaveAttribute('tabindex', '0');
    expect(toggleBtn).toHaveAttribute('aria-checked', 'false');
    expect(toggleBtn).not.toBeChecked();
    expect(indicator).toBeInTheDocument();

    expect(window.localStorage.getItem('theme')).toBe(JSON.stringify('app_light_theme'));
  });

  it('test toggle', () => {
    renderComponentWithProviders(<ThemeSwitcher/>, {localStorage: {theme: 'app_light_theme'}});
    const toggleBtn = screen.getByTestId('toggle');

    fireEvent.click(toggleBtn);
    expect(window.localStorage.getItem('theme')).toBe(JSON.stringify('app_dark_theme'));
    expect(toggleBtn).toBeChecked();

    fireEvent.click(toggleBtn);
    expect(window.localStorage.getItem('theme')).toBe(JSON.stringify('app_light_theme'));
    expect(toggleBtn).not.toBeChecked();
  });

  it('test toggle with default dark theme', () => {
    renderComponentWithProviders(<ThemeSwitcher/>, {
      localStorage: {theme: 'app_light_theme'},
      initialTheme: 'app_dark_theme'
    });
    const toggleBtn = screen.getByTestId('toggle');

    fireEvent.click(toggleBtn);
    expect(window.localStorage.getItem('theme')).toBe(JSON.stringify('app_light_theme'));
    expect(toggleBtn).not.toBeChecked();

    fireEvent.click(toggleBtn);
    expect(window.localStorage.getItem('theme')).toBe(JSON.stringify('app_dark_theme'));
    expect(toggleBtn).toBeChecked();
  });
});
