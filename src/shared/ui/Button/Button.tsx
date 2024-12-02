import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = props => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        {
          [styles.clear]: theme === ThemeButton.CLEAR,
          [styles.outline]: theme === ThemeButton.OUTLINE,
        },
        [className],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
