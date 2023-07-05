import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl'
}

 interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}
export const Button = (props: ButtonProps) => {
  const {
    className,
    theme,
    size = ButtonSize.M,
    square,
    children,
    ...others
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      {...others}
    >
      {children}
    </button>
  );
};
