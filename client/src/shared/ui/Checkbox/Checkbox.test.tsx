import {fireEvent, render} from '@testing-library/react';
import {Checkbox} from 'shared/ui/Checkbox/Checkbox';

describe('Checkbox', () => {
  it('Render default primary', () => {
    const {getByTestId} = render(<Checkbox label="Example label" name="test" value="test-value"/>);

    const label = getByTestId('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('label left center');
    expect(label).toHaveTextContent('Example label');

    const input = getByTestId('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('visually-hidden');
    expect(input).toHaveAttribute('name', 'test');
    expect(input).toHaveAttribute('type', 'checkbox');
    expect(input).toHaveAttribute('tabindex', '0');
    expect(input).toHaveAttribute('value', 'test-value');

    const indicator = getByTestId('indicator');
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass('indicator primary');
  });

  it('label click', () => {
    const {getByTestId} = render(<Checkbox label="Example label" name="test" value="test-value"/>);
    const label = getByTestId('label');
    const input = getByTestId('input');
    const indicator = getByTestId('indicator');

    expect(input).not.toBeChecked();
    fireEvent.click(label);
    expect(input).toBeChecked();
    expect(indicator).toHaveStyle('background-color: rgb(39 39 51)');
  });

  it('primary with right align', () => {
    const {getByTestId} = render(<Checkbox horizontalAlign="right" label="Example label" name="test"
      value="test-value"/>);

    const label = getByTestId('label');
    expect(label).toHaveClass('label right center');
  });

  it('primary with custom text', () => {
    const {getByText} = render(<Checkbox labelFontColor="warning" labelFontSize="fs-notice" label="Example label"
      name="test"
      value="test-value"/>);
    const labelText = getByText('Example label');
    expect(labelText).toHaveClass('text warning fs-notice block');
  });
});
