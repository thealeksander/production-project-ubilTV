import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, readonly, onChange } = props;

  const optionsList = useMemo(
    () =>
      options?.map(it => (
        <option className={styles.option} value={it.value} key={it.value}>
          {it.content}
        </option>
      )),
    [options],
  );

  const mods: Mods = {};

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    },
    [onChange],
  );

  return (
    <div className={classNames(styles.wrapper, mods, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}

      <select
        disabled={readonly}
        value={value}
        onChange={onChangeHandler}
        className={styles.select}
      >
        {optionsList}
      </select>
    </div>
  );
});
