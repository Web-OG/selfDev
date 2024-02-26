import {ChangeEvent, memo, useMemo} from 'react';
import cls from './Select.module.scss';
import classNames from 'classnames';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  required?: boolean;
}

const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    onChange,
    value,
    readonly,
    required
  } = props;

  const onChangeHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(evt.target.value);
    }
  };

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      className={cls.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  return (
    <div className={classNames(cls.Wrapper, className)}>
      {label && (
        <span className={cls.label}>
          {label}
        </span>
      )}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        required={required}
      >
        {optionsList}
      </select>
    </div>
  );
});

Select.displayName = 'Select';
export {Select};