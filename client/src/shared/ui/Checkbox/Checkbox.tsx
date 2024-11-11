import {ReactNode, memo, ChangeEvent} from 'react';
import cls from './Checkbox.module.scss';
import {FontColor, FontSize, HTMLInputProps} from 'shared/lib/types';
import classNames from 'classnames';
import {Typography} from '../Typography';

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
  labelFontSize?: FontSize;
  labelFontColor?: FontColor;
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
    labelFontSize = 'fs-accent',
    labelFontColor,
    ...otherProps
  } = props;

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt.target.value);
    onChecked?.(evt.target.checked);
  };

  const labelMods = {
    [cls[horizontalAlign]]: true,
    [cls[verticalAlign]]: true,
  };

  return (
    <label
      className={classNames(cls.label, {labelClassName}, labelMods)}
      data-testid='label'
    >
      <input
        type='checkbox'
        value={value}
        onChange={onChangeHandler}
        className={classNames('visually-hidden', className)}
        readOnly={readonly}
        name={name}
        tabIndex={0}
        data-testid='input'
        {...otherProps}
      />
      <div
        className={classNames(cls.indicator, {[cls[variant]]: true})}
        data-testid='indicator'
      />
      <Typography.Text fontSize={labelFontSize} type={labelFontColor} data-testid='label-text'>
        {label}
      </Typography.Text>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
export {Checkbox};