import {memo} from 'react';
import cls from './Footer.module.scss'

const Footer = memo(() => {
  return (
    <div className={cls.Footer}>
      <div className='container'>
        <span>Все права защищены</span>
      </div>
    </div>
  );
});

Footer.displayName = 'Footer';
export {Footer};