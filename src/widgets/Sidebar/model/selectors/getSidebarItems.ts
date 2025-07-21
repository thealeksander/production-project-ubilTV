import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/homeIcon.svg';
import ListIcon from 'shared/assets/icons/listIcon.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';
import ArticleIcon from 'shared/assets/icons/list.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, userData => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: RoutePath.MAIN,
      text: 'Главная',
      Icon: HomeIcon,
    },
    {
      path: RoutePath.ABOUT,
      text: 'О сайте',
      Icon: ListIcon,
    },
  ];

  if (userData) {
    sidebarItemList.push(
      {
        path: `${RoutePath.PROFILE}${userData.id}`,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.ARTICLES,
        text: 'Статьи',
        Icon: ArticleIcon,
        authOnly: true,
      },
    );
  }

  return sidebarItemList;
});
