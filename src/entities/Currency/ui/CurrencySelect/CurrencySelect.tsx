import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
   className?: string;
   value?: Currency;
   onChange?: (cur: Currency) => void;
   readonly?: boolean
}

const options: SelectOptions[] = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
  const {

    className,
    onChange,
    value = Currency.RUB,
    readonly
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      label={t('Укажите валюту')}
      className={classNames('', {}, [className])}
    />
  );
};
