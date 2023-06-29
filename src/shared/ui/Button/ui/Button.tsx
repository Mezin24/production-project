 import { classNames } from 'shared/lib/classNames/classNames';
 import cls from './Button.module.scss'
import { ButtonHTMLAttributes } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear'
}

 interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ButtonTheme
}
 export const Button = (props: ButtonProps) => {
  const {
    className,
    theme,
    children,
    ...others
  } = props
 return (
    <button className={classNames(cls.Button , {}, [className, cls[theme]])} {...others}>
      {children}
    </button>
  );
};
