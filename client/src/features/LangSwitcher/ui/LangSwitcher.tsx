import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import classNames from 'classnames';

interface Props {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: Props) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={toggle}
      className={classNames([className])}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
});
