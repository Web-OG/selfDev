import {memo} from 'react';
import cls from './LoginOpportunities.module.scss';
import {LoginOpportunity} from './LoginOpportunity';
import AccessIcon from '@/shared/assets/svgs/login_opp_access.svg';
import ForumIcon from '@/shared/assets/svgs/login_opp_forum.svg';
import CourceIcon from '@/shared/assets/svgs/login_opp_course.svg';
import {useTranslation} from 'react-i18next';

const LoginOpportunities = memo(() => {
  const {t} = useTranslation('loginOpportunities');

  return (
    <div className={cls.opportunities}>
      <LoginOpportunity icon={<AccessIcon width={50} height={50}/>} title={t('Доступ к материалам сайта')}
        desc={t('и возможность сохранять избранное')}/>
      <LoginOpportunity icon={<ForumIcon width={50} height={50}/>} title={t('Общение на форуме,')}
        desc={t('в кругу единомышленников')}/>
      <LoginOpportunity icon={<CourceIcon width={50} height={50}/>} title={t('Курсы для саморазвития')}
        desc={t('и возможность их поиска и сравнения')}/>
    </div>
  );
});

LoginOpportunities.displayName = 'LoginOpportunities';
export {LoginOpportunities};