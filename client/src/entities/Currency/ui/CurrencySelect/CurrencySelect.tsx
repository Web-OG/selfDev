import {useTranslation} from 'react-i18next';
import {Select} from '@/shared/ui/Select/Select';
import {memo, ReactNode, useCallback} from 'react';
import {Currency} from '@/entities/Currency';

interface CurrencySelectProps {
  className?: string;
  label?: ReactNode;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

interface CurrencyOption {
  value: Currency;
  content: Currency
}

const options: CurrencyOption[] = [
  {value: 'RUB', content: 'RUB'},
  {value: 'EUR', content: 'EUR'},
  {value: 'USD', content: 'USD'},
];

const CurrencySelect = memo(({
  className, value, onChange, readonly, label
}: CurrencySelectProps) => {
  const {t} = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <>
      {label && <div>{label}</div>}
      <Select
        className={className}
        label={t('Укажите валюту')}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
        required
      />
    </>
  );
});

CurrencySelect.displayName = 'CurrencySelect';
export {CurrencySelect};
