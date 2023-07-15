import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent, memo, useMemo
} from 'react';
import cls from './Select.module.scss';

export interface SelectOptions {
  value: string;
  content: string
}

interface SelectProps {
   className?: string;
   label?: string;
   options?: SelectOptions[];
   readonly?: boolean;
   value?: string;
   onChange?: (string) => void
}
export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    onChange,
    value,
    readonly
  } = props;
  const mods: Mods = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionsEls = useMemo(() => options?.map((opt) => (
    <option value={opt.value} key={opt.value}>{opt.content}</option>
  )), [options]);

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span>{`${label}>`}</span>}
      <select value={value} onChange={onChangeHandler} disabled={readonly}>
        {optionsEls}
      </select>
    </div>
  );
});
