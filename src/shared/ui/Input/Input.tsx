import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
'value' |
'onChange' |
'readonly'
>;

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
  placeholder?:string;
  autoFocus?: boolean;
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readOnly,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readOnly
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder
      && (
        <div className={cls.placeholder}>
          {`${placeholder} >`}
        </div>
      )}
      <input
        ref={inputRef}
        className={cls.input}
        value={value}
        onChange={changeHandler}
        type={type}
        readOnly={readOnly}
        {...otherProps}
      />
    </div>
  );
});
