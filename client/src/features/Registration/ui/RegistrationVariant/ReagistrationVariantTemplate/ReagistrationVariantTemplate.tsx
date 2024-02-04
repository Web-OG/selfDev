import {memo, useMemo} from 'react';
import cls from './ReagistrationVariantTemplate.module.scss';
import {Link} from 'react-router-dom';

interface Props {
  roleName: string;
  opportunities: string[];
  to: string
}

const RegistrationVariantTemplate = memo((props: Props) => {
  const {roleName, opportunities = [], to} = props;

  const opportunitiesList = useMemo(() => {
    if (opportunities.length) {
      return opportunities.map((opp, i) => <li key={i}>{opp}</li>);
    } else {
      return [];
    }
  }, [opportunities]);

  return (
    <Link to={to} className={cls.card}>
      <div className={cls.role}>{roleName}</div>
      <div>{`Зарегистрировавшись как ${roleName?.toLowerCase()} вы получаете возможность:`}</div>
      <ul className={cls.list}>
        {opportunitiesList}
      </ul>
    </Link>
  );
});

RegistrationVariantTemplate.displayName = 'RegistrationVariantTemplate';
export {RegistrationVariantTemplate};