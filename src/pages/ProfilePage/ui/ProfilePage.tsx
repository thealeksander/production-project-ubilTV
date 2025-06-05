import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import {
  ReducerList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation();
  useDynamicModuleLoader({ reducers, removeAfterUnmount: true });

  return <div>{t('Профиль')}</div>;
};

export default ProfilePage;
