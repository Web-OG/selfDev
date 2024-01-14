import {memo} from 'react';
import cls from '../Footer.module.scss';

const LegalInfo = memo(() => {
  return (
    <ul className={cls.legals}>
      <li>
        <a href='#' target='_blank'>
          Terms
        </a>
      </li>
      <li>
        <a href='#' target='_blank'>
          Privacy
        </a>
      </li>
      <li>
        <a href='#' target='_blank'>
          Docs
        </a>
      </li>
    </ul>
  );
});

LegalInfo.displayName = 'LegalInfo';
export {LegalInfo};