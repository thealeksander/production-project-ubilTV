import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/homeIcon.svg';
import ListIcon from 'shared/assets/icons/listIcon.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
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
  {
    path: RoutePath.PROFILE,
    text: 'Профиль',
    Icon: ProfileIcon,
  },
];
