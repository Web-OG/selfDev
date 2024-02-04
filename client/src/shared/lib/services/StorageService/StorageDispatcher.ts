import LocalStorageService from './LocalStorageService';
import {STORAGE_KEYS} from 'shared/constants/storage';

type StorageKeys = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS];

export class StorageDispatcher {
  private static environment: '' | 'browser' | 'desktop' = '';

  static defineEnvironment() {
    if (window && window.localStorage) {
      this.environment = 'browser';

      return this.environment;
    } else {
      this.environment = 'desktop';

      return this.environment;
    }
  }

  static setItem(key: StorageKeys, value: string | undefined | Array<unknown> | object) {
    const environment = this.environment === '' ? this.defineEnvironment() : this.environment;

    if (environment === 'browser') {
      LocalStorageService.setItem(key, value);
    }
  }

  static getItem(key: StorageKeys) {
    const environment = this.environment === '' ? this.defineEnvironment() : this.environment;

    if (environment === 'browser') {
      return LocalStorageService.getItem(key);
    }
  }

  static removeItem(key: StorageKeys) {
    const environment = this.environment === '' ? this.defineEnvironment() : this.environment;

    if (environment === 'browser') {
      LocalStorageService.removeItem(key);
    }
  }
}
