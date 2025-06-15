import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  size?: number;
  src?: string;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = ({ className, size, src, alt }) => {
  const stylesLine = useMemo<CSSProperties>(
    () => ({
      height: size || 100,
      width: size || 100,
    }),
    [size],
  );

  return (
    <img
      alt={alt}
      src={src}
      style={stylesLine}
      className={classNames(styles.avatar, {}, [className])}
    />
  );
};
