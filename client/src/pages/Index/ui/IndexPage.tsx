import cls from './IndexPage.module.scss';
import {useTranslation} from 'react-i18next';
import classNames from 'classnames';
import {NewsPreview} from 'entities/News';

const IndexPage = () => {
  const {t} = useTranslation('indexPage');

  return (
    <div className={cls.page}>
      <div className={classNames(cls.section, cls.welcome)}>
        <h1 className={cls.heading}>{t('Добро пожаловать на сайт SelfDev')}</h1>
        <div>{t('Мы рады предложить')}</div>
      </div>
      <div className={classNames(cls.section, cls.themes, 'full-width')}>
        <h2 className={cls.heading}>{t('Основные темы которым посвящен сайт')}</h2>
        <div className={cls.topics}>
          <div className={cls.topic}>
            <h3 className={cls.heading}>{t('Скорочтение')}</h3>
            <p>{t('Мы раскрываем секреты')}</p>
          </div>
          <div className={cls.topic}>
            <h3 className={cls.heading}>{t('Развитие памяти')}</h3>
            <p>{t('На сайте собраны материалы')}</p>
          </div>
          <div className={cls.topic}>
            <h3 className={cls.heading}>{t('Личностный рост')}</h3>
            <p>{t('На нашем сайте')}</p>
          </div>
        </div>
      </div>
      <div className={cls.section}>
        <h2 className={cls.heading}>{t('Новости и события')}</h2>
        <div className={cls.topics}>
          <NewsPreview
            date="11.01.2024"
            author={t('Андрей Арсеньев')}
            title={t('Как повысить')}
            desc={t('Как повысить свою личную эффективность')}
            newsId={2}
          />
          <NewsPreview
            date="17.01.2024"
            author={t('Владимир Воронов')}
            title={t('топ-10 книг для саморазвития')}
            desc={t('десяти книгах')}
            newsId={2}
          />
          <NewsPreview
            date="26.01.2024"
            author={t('Борис Борисов')}
            title={t('секреты быстрого обучения')}
            desc={t('Рассказ о десяти методах')}
            newsId={2}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
