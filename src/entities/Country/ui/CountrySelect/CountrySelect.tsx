import { memo, useCallback } from 'react';
import { Country } from 'entities/Country/model/types/country';
import { ListBox } from 'shared/ui/ListBox';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    return (
      <ListBox
        onChange={onChangeHandler}
        value={value}
        defaultValue={t('Укажите страну')}
        label={t('Укажите страну')}
        items={options}
        readonly={readonly}
        direction="top"
      />
    );
  },
);
