import {memo} from 'react';
import DarkIcon from '../../assets/svgs/web-thug_dark.svg';
import LightIcon from '../../assets/svgs/web-thug_light.svg';
import {Link} from 'react-router-dom';
import cls from './Logo.module.scss';
import classNames from 'classnames';
import {useTheme} from 'app/providers/ThemeProvider';

interface LogoProps {
  className?: string;
}

const Logo = memo((props: LogoProps) => {
  const
    {className} = props,
    {theme} = useTheme(),
    isLightTheme = theme === 'app_light_theme';

  return (
    <Link to={'/'} className={classNames(cls.link, className)}>
      {isLightTheme ? <DarkIcon width="70" height='70'/> : <LightIcon width="70" height='70'/>}
    </Link>
  );
});

Logo.displayName = 'Logo';
export {Logo};