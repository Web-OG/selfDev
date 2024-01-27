import {memo} from 'react';
import cls from './NewsPreview.module.scss';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {useTranslation} from 'react-i18next';

interface NewsPreviewProps {
  className?: string;
  date: string;
  author: string;
  title: string;
  desc: string;
  newsId: string | number;
}

const NewsPreview = memo((props: NewsPreviewProps) => {
  const {
    className,
    date,
    author,
    title,
    desc,
    newsId
  } = props;

  const {t} = useTranslation();

  return (
    <div className={classNames(cls.news, className)}>
      <div className={cls.dateWrap}>
        <div>{date}</div>
        <div>{author}</div>
      </div>
      <div className={cls.title}>{title}</div>
      <div>{desc}</div>
      <Link className={cls.more} to={`/news/${newsId}`}>{t('Читать далее')}</Link>
    </div>
  );
});

NewsPreview.displayName = 'NewsPreview';
export {NewsPreview};