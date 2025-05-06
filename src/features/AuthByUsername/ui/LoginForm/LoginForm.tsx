import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Input
        autoFocus
        title="Логин"
        type="text"
        className={styles.input}
        placeholder={t('Введите username')}
      />
      <Input
        title="Пароль"
        type="text"
        className={styles.input}
        placeholder={t('Введите пароль')}
      />
      <Button className={styles.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
