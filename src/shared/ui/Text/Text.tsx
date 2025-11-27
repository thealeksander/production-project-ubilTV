import { classNames } from 'shared/lib/classNames';
import { ValueOf } from 'shared/lib/types/types';
import { memo } from 'react';
import styles from './Text.module.scss';

export const TextTheme = {
  PRIMARY: 'primary',
  INVERTED: 'inverted',
  ERROR: 'error',
} as const;

export type TextThemeType = ValueOf<typeof TextTheme>;

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
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

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
    [styles[align]]: true,
    [styles[size]]: true,
  };

  return (
    <div className={classNames(styles.text, mods, [className])}>
      {text && <HeaderTag className={styles.text}>{text}</HeaderTag>}
      {title && <p className={styles.title}>{title}</p>}
    </div>
  );
});
