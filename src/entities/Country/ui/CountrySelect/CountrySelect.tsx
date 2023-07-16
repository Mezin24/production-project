import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
   className?: string;
   value?: Country;
   onChange?: (cur: Country) => void;
   readonly?: boolean
}

const options: SelectOptions[] = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = (props: CountrySelectProps) => {
  const {

    className,
    onChange,
    value = Country.Russia,
    readonly
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      label={t('Укажите страну')}
      className={classNames('', {}, [className])}
    />
  );
};
