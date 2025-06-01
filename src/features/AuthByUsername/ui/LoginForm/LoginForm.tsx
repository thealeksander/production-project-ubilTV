import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />

      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        autoFocus
        title="Логин"
        type="text"
        className={styles.input}
        placeholder={t('Введите username')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        title="Пароль"
        type="text"
        className={styles.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={styles.loginBtn}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
