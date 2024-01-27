import {memo, ReactNode} from 'react';
import cls from './Contact.module.scss';
import classNames from 'classnames';

interface ContactProps {
  className?: string;
  role: string;
  name: string;
  email: string;
  avatar?: ReactNode
}

const Contact = memo((props: ContactProps) => {
  const {role, className, avatar, name, email} = props;

  return (
    <div className={classNames(cls.contact, className)}>
      <div className={cls.role}>{role}</div>
      <div className={cls.avatar}>{avatar}</div>
      <div>{name}</div>
      <a href={email}>{email}</a>
    </div>
  );
});

Contact.displayName = 'Contact';
export {Contact};