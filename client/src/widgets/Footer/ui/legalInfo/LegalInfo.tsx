import {memo} from 'react';
import cls from '../Footer.module.scss';
import {useTranslation} from 'react-i18next';

const LegalInfo = memo(() => {
  const {t} = useTranslation();

  return (
    <ul className={cls.legals}>
      <li>
        <a href='#' target='_blank'>
          {t('Условия')}
        </a>
      </li>
      <li>
        <a href='#' target='_blank'>
          {t('Конфиденциальность')}
        </a>
      </li>
      <li>
        <a href='#' target='_blank'>
          {t('Документы')}
        </a>
      </li>
    </ul>
  );
});

LegalInfo.displayName = 'LegalInfo';
export {LegalInfo};