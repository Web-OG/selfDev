import {ReactNode, memo, ChangeEvent} from 'react';
import cls from './Checkbox.module.scss';
import {FontSizes, HTMLInputProps} from 'shared/types';
import classNames from 'classnames';

type CheckboxHorizontalAlign = 'left' | 'right';
type CheckboxVerticalAlign = 'start' | 'center' | 'end';
type CheckboxVariant = 'primary';

interface CheckboxProps extends HTMLInputProps {
  name: string;
  horizontalAlign?: CheckboxHorizontalAlign;
  verticalAlign?: CheckboxVerticalAlign;
  label: ReactNode;
  variant?: CheckboxVariant;
  className?: string;
  labelClassName?: string;
  fontSize?: FontSizes;
  value?: string | number;
  onChange?: (value: string) => void;
  onChecked?: (value: boolean) => void;
  readonly?: boolean;
}

const Checkbox = memo((props: CheckboxProps) => {
  const {
    name,
    className = '',
    labelClassName = '',
    value,
    onChange,
    onChecked,
    readonly,
    label,
    horizontalAlign = 'left',
    verticalAlign = 'center',
    variant = 'primary',
    fontSize = 'accent',
    ...otherProps
  } = props;

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt.target.value);
    onChecked?.(evt.target.checked);
  };

  const labelMods = {
    [cls[horizontalAlign]]: true,
    [cls[verticalAlign]]: true,
    [cls[fontSize]]: true,
  };

  return (
    <label
      className={classNames(cls.label, {labelClassName}, labelMods)}
    >
      <input
        type="checkbox"
        value={value}
        onChange={onChangeHandler}
        className={classNames('visually-hidden', className)}
        readOnly={readonly}
        name={name}
        tabIndex={0}
        {...otherProps}
      />
      <div
        className={classNames(cls.indicator, {[cls[variant]]: true})}
      />
      {label}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
export {Checkbox};