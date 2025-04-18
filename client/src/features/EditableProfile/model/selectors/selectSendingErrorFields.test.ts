import {StateSchema} from '@/app/providers/StoreProvider';
import {selectSendingErrorFields} from './selectSendingErrorFields';

describe('selectSendingErrorFields.test', () => {
  it('should return value', () => {
    const error = {avatar: {ru: 'test', en: 'test'}};
    const state: DeepPartial<StateSchema> = {
      profile: {
        sendingErrorFields: error
      },
    };
    expect(selectSendingErrorFields(state as StateSchema)).toEqual(error);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(selectSendingErrorFields(state as StateSchema)).toEqual(undefined);
  });
});
