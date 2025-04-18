import {StateSchema} from '@/app/providers/StoreProvider';
import {AsyncThunkAction} from '@reduxjs/toolkit';
import axios, {AxiosStatic} from 'axios';
import Mock = jest.Mock;

type ActionCreatorType<Return, Arg, RejectedValue>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<Mock<unknown, unknown[], unknown>>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;
  isAxiosError: (arg: unknown) => boolean;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);

    this.api = mockedAxios;
    this.isAxiosError = axios.isAxiosError;
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);

    return action(
      this.dispatch,
      this.getState,
      {
        api: this.api,
        isAxiosError: this.isAxiosError
      },
    );
  }
}
