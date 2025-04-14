import cls from './AboutPage.module.scss';
import {useTranslation} from 'react-i18next';
import classNames from 'classnames';
import notebookSrc from '@/shared/assets/images/notebook.jpeg';
import authorsSrc from '@/shared/assets/images/authors.jpg';
import {Contact} from '@/entities/User';

const AboutPage = () => {
  const {t} = useTranslation('aboutPage');

  return (
    <>
      <h1 className={cls.heading}>{t('О сайте')}</h1>
      <div className={classNames(cls.section, cls.destiny, 'full-width')}>
        <h2>{t('Предназначение')}</h2>
        <p>{t('Наша цель помочь')}</p>
      </div>
      <div className={cls.page}>
        <div className={cls.history}>
          <div className={cls.section}>
            <h2 className={cls.sectionHeading}>{t('История')}</h2>
            <p>{t('История создания')}</p>
          </div>
          <img className={cls.img} src={notebookSrc} alt="notebook photo"/>
        </div>
        <div className={classNames(cls.authors, 'full-width')}>
          <img className={cls.img} src={authorsSrc} alt="authors"/>
          <div className={cls.section}>
            <h2 className={cls.sectionHeading}>{t('Авторы')}</h2>
            <p>{t('На сайте работают')}</p>
          </div>
        </div>
        <div className={classNames(cls.section, cls.contactUs)}>
          <h2>{t('Связаться с нами')}</h2>
          <div className={cls.contactUsSub}>{t('Вы пишете статьи')}</div>
          <div className={cls.contacts}>
            <Contact role={t('Основатель')} name={t('Иван Иванов')} email="email@example.com"/>
            <Contact role={t('Главный редактор')} name={t('Петр Петров')} email="email@example.com"/>
            <Contact role={t('Менеджер по рекламе')} name={t('Сергей Сергеев')} email="email@example.com"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
