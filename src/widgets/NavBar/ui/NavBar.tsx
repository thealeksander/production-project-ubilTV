import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Modal } from 'shared/ui/Modal';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const { t, i18n } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onAuthModalHandler = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(styles.navBar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onAuthModalHandler}
        className={styles.links}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onAuthModalHandler}>
        wefjpowejfiopwejhfopiwejfpowejfpojwepofjpweojfpowejfpo
      </Modal>
    </div>
  );
}
