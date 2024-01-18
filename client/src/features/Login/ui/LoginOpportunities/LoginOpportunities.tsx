import {memo} from 'react';
import cls from './LoginOpportunities.module.scss';
import {LoginOpportunity} from './LoginOpportunity';
import AccessIcon from 'shared/assets/svgs/login_opp_access.svg';
import ForumIcon from 'shared/assets/svgs/login_opp_forum.svg';
import CourceIcon from 'shared/assets/svgs/login_opp_course.svg';

const LoginOpportunities = memo(() => {
  return (
    <div className={cls.opportunities}>
      <LoginOpportunity icon={<AccessIcon width={50} height={50}/>} title={'Доступ к материалам сайта '}
        desc={'и возможность сохранять избранное'}/>
      <LoginOpportunity icon={<ForumIcon width={50} height={50}/>} title={'Общение на форуме,'}
        desc={'в кругу единомышленников'}/>
      <LoginOpportunity icon={<CourceIcon width={50} height={50}/>} title={'Курсы для саморазвития'}
        desc={'и возможность их поиска и сравнения'}/>
    </div>
  );
});

LoginOpportunities.displayName = 'LoginOpportunities';
export {LoginOpportunities};