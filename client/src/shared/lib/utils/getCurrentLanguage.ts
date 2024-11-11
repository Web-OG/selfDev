import i18n from 'i18next';
import {StorageDispatcher} from '../services/StorageService';
import {ProjectLanguages} from '../types';

export const getCurrentLanguage = (): ProjectLanguages => {
  return i18n.language
    || (typeof window !== 'undefined' && StorageDispatcher.getItem('i18nextLng'))
    || 'ru';
};