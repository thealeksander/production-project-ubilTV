import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Modal } from 'shared/ui/Modal';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const { t, i18n } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.navBar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onLogout}
          className={styles.links}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navBar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onShowModal}
        className={styles.links}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
}
