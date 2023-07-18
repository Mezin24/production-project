import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  DISABLED = 'disabled'
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
  disabled?: boolean
}
export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.OUTLINE,
    size = ButtonSize.M,
    square,
    children,
    disabled,
    ...others
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled
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
});
