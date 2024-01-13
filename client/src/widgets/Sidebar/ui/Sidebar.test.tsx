import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from 'widgets/Sidebar';
import {renderComponentWithProviders} from 'shared/lib/components/testing/renderComponentWithProviders';

describe('Sidebar', () => {
  test('with only first param', () => {
    renderComponentWithProviders(<Sidebar />);
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderComponentWithProviders(<Sidebar />);

    const toggleBtn = screen.getByTestId('Sidebar-toggle');

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('Sidebar-toggle')).toHaveTextContent('>');

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('Sidebar-toggle')).toHaveTextContent('<');
  });
});