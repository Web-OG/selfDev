import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorElement.module.scss';
import classNames from 'classnames';
import {useTranslation} from 'react-i18next';

interface Props {
  className?: string;
}

export const ErrorElement = ({ className }: Props) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.ErrorElement,[className])}>
      <p>{t('Опаньки!')}</p>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
