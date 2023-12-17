import {memo} from 'react';
import Icon from '../../assets/svgs/logo.svg'
import {Link} from "react-router-dom";
import cls from './Logo.module.scss'
import classNames from "classnames";

interface LogoProps {
  className?: string;
}

const Logo = memo((props: LogoProps) => {
  const {className} = props;

  return (
    <Link to={'/'} className={classNames(cls.link, className)}>
      <Icon width="90" height="89"/>
    </Link>
  );
});

Logo.displayName = 'Logo';
export {Logo};