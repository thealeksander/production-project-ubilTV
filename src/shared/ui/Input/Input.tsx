import {
  InputHTMLAttributes,
  memo,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import { Mods } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  autoFocus?: boolean;
  readonly?: boolean;
  onChange?: (value: string) => void;
  onlyNumber?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    onlyNumber = false,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (onlyNumber && value && !/^\d+$/.test(value)) {
      return;
    }
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (event: SyntheticEvent<HTMLInputElement, Event>) => {
    if (onlyNumber && value && !/^\d+$/.test(value)) {
      return;
    }
    setCaretPosition(event.currentTarget.selectionStart || 0);
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const mods: Mods = {
    [styles.readOnly]: readonly,
  };

  const isCarretVisible = isFocused && !readonly;

  return (
    <div className={classNames(styles.inputWrapper, mods, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={styles.input}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isCarretVisible && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 9.6}px` }}
          />
        )}
      </div>
    </div>
  );
});
