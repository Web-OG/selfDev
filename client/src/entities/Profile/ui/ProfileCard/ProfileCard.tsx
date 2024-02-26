import {useTranslation} from 'react-i18next';
import {Input} from 'shared/ui/Input';
import {Currency, CurrencySelect} from 'entities/Currency';
import {CountrySelect, Country} from 'entities/Country';
import cls from './ProfileCard.module.scss';
import classNames from 'classnames';
import {Avatar, DefaultAvatar} from 'shared/ui/Avatar';
import {MappedServerBadRequestErrors} from 'shared/lib/types';

interface ProfileCardProps {
  className?: string;
  remoteAvatar: string;
  avatar: string;
  city: string;
  country: Country | undefined;
  age: number;
  firstname: string;
  phone: string;
  currency: Currency | undefined;
  username: string;
  lastname: string;
  readonly: boolean;
  onChangeLastname: (value: string) => void;
  onChangeFirstname: (value: string) => void;
  onChangeCity: (value: string) => void;
  onChangeAge: (value: string) => void;
  onChangeUsername: (value: string) => void;
  onChangePhone: (value: string) => void;
  onChangeAvatar: (value: string) => void;
  onChangeCurrency: (currency: Currency) => void;
  onChangeCountry: (country: Country) => void;
  fieldsErrors: MappedServerBadRequestErrors | undefined;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className = '',
    remoteAvatar = '',
    avatar = '',
    city = '',
    country = 'Russia',
    age = '',
    firstname = '',
    currency = 'RUB',
    username = '',
    lastname = '',
    phone,
    fieldsErrors,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
    onChangePhone
  } = props;
  const {t} = useTranslation('profile');

  const mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, className)}>
      {remoteAvatar ? <Avatar src={remoteAvatar}/> : <DefaultAvatar/>}
      <div className={classNames(cls.inputs, mods)}>
        <Input
          value={firstname}
          label={t('Ваше имя')}
          placeholder={t('Ваше имя')}
          onChange={onChangeFirstname}
          readonly={readonly}
          externalError={fieldsErrors?.firstname}
        />
        <Input
          value={lastname}
          label={t('Ваша фамилия')}
          placeholder={t('Ваша фамилия')}
          onChange={onChangeLastname}
          readonly={readonly}
          externalError={fieldsErrors?.lastname}
        />
        <Input
          value={age}
          label={t('Ваш возраст')}
          placeholder={t('Ваш возраст')}
          onChange={onChangeAge}
          readonly={readonly}
          externalError={fieldsErrors?.age}
        />
        <Input
          value={city}
          label={t('Ваш город')}
          placeholder={t('Ваш город')}
          onChange={onChangeCity}
          readonly={readonly}
          externalError={fieldsErrors?.city}
        />
        <Input
          value={username}
          label={t('Имя пользователя')}
          placeholder={t('Имя пользователя')}
          onChange={onChangeUsername}
          readonly={readonly}
          externalError={fieldsErrors?.username}
        />
        <Input
          value={avatar}
          label={t('Ссылка на аватар')}
          placeholder={t('Ссылка на аватар')}
          onChange={onChangeAvatar}
          readonly={readonly}
          externalError={fieldsErrors?.avatar}
        />
        <Input
          value={phone}
          label={t('Телефон')}
          placeholder={t('Телефон')}
          onChange={onChangePhone}
          readonly={readonly}
          externalError={fieldsErrors?.phone}
        />
        <CurrencySelect
          value={currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          value={country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
