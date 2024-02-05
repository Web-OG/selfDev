import {memo, ReactNode} from 'react';
import classNames from 'classnames';
import cls from './Alert.module.scss';
import SuccessIcon from '../../assets/svgs/success_mark.svg';
import InfoIcon from '../../assets/svgs/info_mark.svg';
import WarningIcon from '../../assets/svgs/warning_mark.svg';
import ErrorIcon from '../../assets/svgs/error_mark.svg';

type AlertSeverity = 'success' | 'info' | 'warning' | 'error';
type AlertVariant = 'filled' | 'outlined'

interface AlertProps {
  className?: string;
  severity?: AlertSeverity;
  variant?: AlertVariant;
  icon?: ReactNode | undefined | false;
  title?: string;
  children: string;
  opacity?: boolean
}

const Alert = memo((props: AlertProps) => {
  const {
    className,
    icon = undefined,
    opacity = true,
    title,
    variant = 'filled',
    severity = 'success',
    children
  } = props;

  const mods = {
    [cls.opacity]: opacity,
    [cls[variant]]: true,
    [cls[severity]]: true,
  };

  const defaultSeverityIcon: Record<AlertSeverity, ReactNode> = {
    success: <SuccessIcon width='24' height='24'/>,
    info: <InfoIcon width='24' height='24'/>,
    warning: <WarningIcon width='24' height='24'/>,
    error: <ErrorIcon width='24' height='24'/>
  };

  return (
    <div className={classNames(cls.alert, mods, className)}>
      {(icon || icon === undefined) && (
        <div className="MuiAlert-icon">
          {icon || defaultSeverityIcon[severity]}
        </div>
      )}
      <div>
        <div className="MuiAlert-action">
          {title}
        </div>
        <div className="MuiAlert-message">{children}</div>
      </div>
    </div>
  );
});

Alert.displayName = 'Alert';
export {Alert};