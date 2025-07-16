import { classNames } from 'shared/lib/classNames';
import { ValueOf } from 'shared/lib/types/types';
import { memo } from 'react';
import styles from './Text.module.scss';

export const TextTheme = {
  PRIMARY: 'primary',
  ERROR: 'error',
} as const;

export type TextThemeType = ValueOf<typeof TextTheme>;

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemeType;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
    [styles[align]]: true,
    [styles[size]]: true,
  };

  return (
    <div className={classNames(styles.text, mods, [className])}>
      {text && <p className={styles.text}>{text}</p>}
      {title && <p className={styles.title}>{title}</p>}
    </div>
  );
});
