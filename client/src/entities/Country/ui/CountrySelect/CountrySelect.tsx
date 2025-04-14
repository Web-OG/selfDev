import {useTranslation} from 'react-i18next';
import {Select} from '@/shared/ui/Select/Select';
import {memo, useCallback} from 'react';
import {Country} from '@/entities/Country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

interface CountryOption {
  value: Country;
  content: Country
}

const options: CountryOption[] = [
  {value: 'Armenia', content: 'Armenia'},
  {value: 'Russia', content: 'Russia'},
  {value: 'Belarus', content: 'Belarus'},
  {value: 'Kazakhstan', content: 'Kazakhstan'},
  {value: 'Ukraine', content: 'Ukraine'},
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {className, value, onChange, readonly} = props;
  const {t} = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      className={className}
      label={t('Укажите страну')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
