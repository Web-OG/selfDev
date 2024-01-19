import {memo} from 'react';
import cls from './Footer.module.scss';
import {LegalInfo} from 'widgets/Footer/ui/legalInfo/LegalInfo';
import classNames from 'classnames';

const Footer = memo(() => {
  return (
    <div className={cls.Footer}>
      <div className={classNames(cls.container, 'container')}>
        <span>© 2024 WebThug</span>
        <LegalInfo />
      </div>
    </div>
  );
});

Footer.displayName = 'Footer';
export {Footer};