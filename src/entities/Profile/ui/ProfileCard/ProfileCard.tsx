import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';

import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);

  return (
    <div className={classNames(styles.profileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Профиль')} />
        <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>

      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={styles.input}
        />
        <Input
          value={data?.username}
          placeholder={t('Вашa фамилия')}
          className={styles.input}
        />
      </div>
    </div>
  );
};
