import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  shortLng?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({
  className,
  shortLng,
}) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames(styles.langSwitcher, {}, [className])}
    >
      {t(shortLng ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};
