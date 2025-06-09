import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  ReducerList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import styles from './ProfilePage.module.scss';

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation();
  useDynamicModuleLoader({ reducers, removeAfterUnmount: true });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
