import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkThemes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkThemes
}

export const AppLink: FC<AppLinkProps> = memo((props : AppLinkProps) => {
  const {
    className,
    to,
    theme = AppLinkThemes.PRIMARY,
    children,
    ...others
  } = props;
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...others}>
      {children}
    </Link>
  );
});
