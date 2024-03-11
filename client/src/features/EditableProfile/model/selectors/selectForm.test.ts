import {StateSchema} from 'app/providers/StoreProvider';
import {selectForm} from './selectForm';

describe('selectForm.test', () => {
  it('should return value', () => {
    const data = {
      avatar: 'test',
      country: 'Russia',
      age: 50
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          avatar: 'test',
          country: 'Russia',
          age: 50
        },
      },
    };

    expect(selectForm(state as StateSchema)).toEqual(data);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    const emptyFields = {
      city: '',
      username: '',
      phone: '',
      currency: undefined,
      country: undefined,
      age: 0,
      avatar: '',
      lastname: '',
      firstname: ''
    };

    expect(selectForm(state as StateSchema)).toEqual(emptyFields);
  });
});
