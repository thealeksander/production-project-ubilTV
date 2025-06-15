import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';

import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader';
import { TextAlign } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar';
import { Mods } from 'shared/lib/classNames/classNames';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUserName?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const {
    className,
    data,
    error,
    isLoading,
    readonly = false,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUserName,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  if (isLoading) {
    return (
      <div
        className={classNames(styles.profileCard, {}, [
          className,
          styles.loading,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(styles.profileCard, {}, [
          className,
          styles.error,
        ])}
      >
        <Text
          theme={TextTheme.ERROR}
          text={t('Попробуйте обновить страницу')}
          title={t('Произошла ошибка при загрузке профиля')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  return (
    <div className={classNames(styles.profileCard, mods, [className])}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data?.avatar} alt="" />
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={styles.input}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Вашa фамилия')}
          className={styles.input}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          value={String(data?.age)}
          placeholder={t('Ваш возраст')}
          className={styles.input}
          onChange={onChangeAge}
          readonly={readonly}
          onlyNumber
        />
        <Input
          value={data?.city}
          placeholder={t('Ваш город')}
          className={styles.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('Введите имя пользователя')}
          className={styles.input}
          onChange={onChangeUserName}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар')}
          className={styles.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={styles.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={styles.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
