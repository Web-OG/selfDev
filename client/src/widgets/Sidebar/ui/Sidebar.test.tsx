import {cleanup, fireEvent, screen} from '@testing-library/react';
import {Sidebar} from './Sidebar';
import {renderComponentWithProviders} from 'shared/lib/components/testing/renderComponentWithProviders';

describe('Sidebar', () => {
  let toggleBtn: HTMLElement;

  beforeEach(() => {
    renderComponentWithProviders(<Sidebar/>);
    toggleBtn = screen.getByTestId('Sidebar-toggle');
  });
  afterEach(() => cleanup());

  it('with only first param', () => {
    expect(toggleBtn).toBeInTheDocument();
  });

  it('test toggle', () => {
    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveTextContent('<');

    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveTextContent('>');
  });
});