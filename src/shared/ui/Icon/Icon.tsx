import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg } = props;
  return <Svg className={classNames(styles.icon, {}, [className])} />;
});
