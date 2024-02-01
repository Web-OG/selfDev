import LocalStorageService from './LocalStorageService';

class StorageApiDispatcher {
  environment: '' | 'browser' | 'desktop' = '';

  defineEnvironment() {
    if (window && window.localStorage) {
      this.environment = 'browser';

      return this.environment;
    } else {
      this.environment = 'desktop';

      return this.environment;
    }
  }

  setItem(key: string, value: string | Array<unknown> | object) {
    const environment = this.environment === '' ? this.defineEnvironment() : this.environment;

    if (environment === 'browser') {
      LocalStorageService.setItem(key, value);
    }
  }

  getItem(key: string) {
    const environment = this.environment === '' ? this.defineEnvironment() : this.environment;

    if (environment === 'browser') {
      return LocalStorageService.getItem(key);
    }
  }

  removeItem(key: string) {
    const environment = this.environment === '' ? this.defineEnvironment() : this.environment;

    if (environment === 'browser') {
      LocalStorageService.removeItem(key);
    }
  }
}

export const StorageDispatcher = new StorageApiDispatcher();