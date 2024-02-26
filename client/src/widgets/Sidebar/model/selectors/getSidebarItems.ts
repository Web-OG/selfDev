import {createSelector} from '@reduxjs/toolkit';
import {getUserAuthData} from 'entities/User';
import {SidebarItemType} from '../types/sidebar';
import AboutIcon from 'shared/assets/svgs/about.svg';
import PostsIcon from 'shared/assets/svgs/posts.svg';
import ProfileIcon from 'shared/assets/svgs/profile.svg';
import MainIcon from 'shared/assets/svgs/home.svg';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData): SidebarItemType[] => {
    if (userData) {
      return [
        {
          path: '/',
          Icon: MainIcon,
          text: {ru: 'Главная', en: 'Main'},
        },
        {
          path: 'about/',
          Icon: AboutIcon,
          text: {ru: 'О сайте', en: 'About'},
        },
        {
          path: `profile/${userData.id}`,
          Icon: ProfileIcon,
          text: {ru: 'Профиль', en: 'Profile'},
        },
        {
          path: 'posts/',
          Icon: PostsIcon,
          text: {ru: 'Посты', en: 'Posts'},
          width: 40,
          height: 40
        },
      ];
    } else return [];
  },
);
