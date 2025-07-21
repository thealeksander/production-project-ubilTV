import { FC, useCallback } from 'react';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  console.log('authData', authData?.id);
  console.log('profileData', profileData?.id);

  const canEdit = authData?.id === profileData?.id;

  console.log('canEdit', canEdit);

  return (
    <div className={classNames(styles.profilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div className={styles.btnsWrapper}>
          {readonly ? (
            <Button
              className={styles.editBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
            >
              {t('Редактировать')}
            </Button>
          ) : (
            <div>
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                {t('Отменить')}
              </Button>
              <Button
                className={styles.saveBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onSave}
              >
                {t('Сохранить')}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
