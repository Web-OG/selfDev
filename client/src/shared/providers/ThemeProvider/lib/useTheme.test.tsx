import {act, renderHook} from '@testing-library/react';
import {useTheme} from './useTheme';
import {useHooksThemeContext} from 'shared/lib/components/testing/useHooksThemeContext';

describe('useTheme', () => {
  it('should return initial theme', () => {
    const {result} = renderHook(useTheme);
    expect(result.current.theme).toBe('app_light_theme');
    expect(typeof result.current.toggleTheme).toBe('function');
  });

  it('toggle theme', () => {
    const {result} = renderHook(() => useTheme(), {wrapper: useHooksThemeContext});
    expect(result.current.theme).toBe('app_light_theme');
    act(() => {
      result.current.toggleTheme('app_dark_theme');
    });
    expect(result.current.theme).toBe('app_dark_theme');
    act(() => {
      result.current.toggleTheme('app_light_theme');
    });
    expect(result.current.theme).toBe('app_light_theme');
  });
});
