import React from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  auth?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePaths.main,
    Icon: HomeIcon,
    text: 'главная'
  },
  {
    path: RoutePaths.about,
    Icon: AboutIcon,
    text: 'о нас'
  },
  {
    path: RoutePaths.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
    auth: true
  },
];
