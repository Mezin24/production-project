import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
  placeholder?:string;
  autoFocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
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

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
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
        {...otherProps}
      />
    </div>
  );
});
