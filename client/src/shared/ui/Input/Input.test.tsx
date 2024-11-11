import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {Input} from './Input';

describe('Input', () => {
  afterEach(() => cleanup());
  it('Render default primary', () => {
    const {getByTestId} = render(<Input label="Example label" name="test" value="test-value"/>);

    const wrapper = getByTestId('input-wrapper');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass('InputWrapper');
    expect(wrapper).toHaveTextContent('Example label');

    const input = getByTestId('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('input');
    expect(input).toHaveAttribute('name', 'test');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('value', 'test-value');
  });

  it('input', () => {
    const {getByTestId} = render(<Input label="Example label" name="test"/>);
    const input = getByTestId('input');

    fireEvent.change(input, {target: {value: 'test input'}});
    expect(input).toHaveValue('test input');
  });

  it('input with email validation err', () => {
    const {getByTestId} = render(<Input label="Example label" name="test" validations={['email']}
      currentLanguage='ru'/>);
    const input = getByTestId('input');
    fireEvent.change(input, {target: {value: 'test input'}});
    expect(input).toHaveValue('test input');
    fireEvent.blur(input);

    const errMsg = getByTestId('errMassage');
    expect(errMsg).toBeInTheDocument();
    expect(errMsg).toHaveTextContent('Не верный формат эл.почты');
  });

  it('input with multiple validations', () => {
    const {getByTestId} = render(<Input label="Example label" name="test" validations={['email', 'without-indents']}
      currentLanguage='ru'/>);
    const input = getByTestId('input');
    fireEvent.change(input, {target: {value: '   '}});
    expect(input).toHaveValue('   ');
    fireEvent.blur(input);
    screen.debug();

    const errMsg = getByTestId('errMassage');
    expect(errMsg).toBeInTheDocument();
    expect(errMsg).toHaveTextContent('Не верный формат эл.почты Значение не должно содержать пробельные символы');
  });
});
