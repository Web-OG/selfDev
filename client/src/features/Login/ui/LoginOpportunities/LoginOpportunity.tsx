import {memo, ReactNode} from 'react';
import cls from './LoginOpportunities.module.scss';

interface LoginOpportunityProps {
  icon: ReactNode;
  title: string;
  desc?: string
}

const LoginOpportunity = memo((props: LoginOpportunityProps) => {
  const {icon,desc,title} = props;

  return (
    <div className={cls.opportunity}>
      <div>
        {icon}
      </div>
      <div>
        <div className={cls.title}>{title}</div>
        {desc && <div>{desc}</div>}
      </div>
    </div>
  );
});

LoginOpportunity.displayName = 'LoginOpportunity';
export {LoginOpportunity};