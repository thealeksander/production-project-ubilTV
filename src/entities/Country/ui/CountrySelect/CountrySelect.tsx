import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select';
import { classNames } from 'shared/lib/classNames';
import { Country } from 'entities/Country/model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  {
    value: Country.Armenia,
    content: Country.Armenia,
  },
  {
    value: Country.Belarus,
    content: Country.Belarus,
  },
  {
    value: Country.Kazakhstan,
    content: Country.Kazakhstan,
  },
  {
    value: Country.Russia,
    content: Country.Russia,
  },
];

export const CountrySelect = memo(
  ({ className, value, readonly = false, onChange }: CountrySelectProps) => {
    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    return (
      <Select
        className={classNames('', {}, [className])}
        label="Укажите валюту"
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    );
  },
);
