import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import classNames from 'classnames';
import cls from './LangSwitcher.module.scss';

interface Props {
  className?: string;
  short: boolean;
}

const LangSwitcher = memo(({className, short}: Props) => {
  const {t, i18n} = useTranslation();

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <button
      onClick={toggle}
      className={classNames(cls.button, {[cls.buttonShort]: short}, [className])}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </button>
  );
});

LangSwitcher.displayName = 'LangSwitcher';
export {LangSwitcher};