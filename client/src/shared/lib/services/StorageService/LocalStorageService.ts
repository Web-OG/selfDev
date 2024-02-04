class LocalStorageService {
  setItem(key: string, value: string | undefined | Array<unknown> | object) {
    const serializedValue = JSON.stringify(value);

    window.localStorage.setItem(key, serializedValue);
  }

  getItem(key: string) {
    const item = window.localStorage.getItem(key);

    return item && JSON.parse(item);
  }

  removeItem(key: string) {
    window.localStorage.removeItem(key);
  }
}

export default new LocalStorageService();