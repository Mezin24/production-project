import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import DetailsIcon from 'shared/assets/icons/list.svg';
import { SidebarItemType } from '../../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePaths.main,
        Icon: HomeIcon,
        text: 'главная'
      },
      {
        path: RoutePaths.about,
        Icon: AboutIcon,
        text: 'о нас'
      }];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePaths.profile + userData.id,
          Icon: ProfileIcon,
          text: 'Профиль',
          auth: true
        },
        {
          path: RoutePaths.articles,
          Icon: DetailsIcon,
          text: 'Статьи',
          auth: true
        }
      );
    }

    return sidebarItemsList;
  }
);
