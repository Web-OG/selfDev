import {cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {UserRegistrationForm} from './UserRegistrationForm';
import {
  renderComponentWithProviders,
  RootReducerType
} from '@/shared/lib/components/testing/renderComponentWithProviders';
import {initialUserRegistrationSlice, mockUserSlice, postListSlice} from '@/shared/lib/mocks/slices';
import {userRegistrationActions} from '../../model/slices/userRegistrationSlice';
import {rtkQueryApiMock} from '@/shared/lib/components/testing/mocks';

const initialState = {
  ...mockUserSlice,
  ...postListSlice,
  api: rtkQueryApiMock,
  userRegistration: {
    ...initialUserRegistrationSlice
  },
} as Partial<RootReducerType>;

describe('UserRegistrationForm', () => {
  afterEach(() => cleanup());
  it('test username input', async () => {
    const {store, getByTestId} = renderComponentWithProviders(<UserRegistrationForm/>, {
      initialState: initialState
    });
    expect(store.getState()).toEqual(initialState);

    const username = getByTestId('username') as HTMLInputElement;
    expect(username).toBeInTheDocument();
    expect(username).toHaveClass('input');
    expect(username).toHaveAttribute('placeholder', 'username');
    expect(username).toBeRequired();

    const usernameWrapper = username?.parentElement;
    expect(usernameWrapper).toHaveClass('InputWrapper');

    const usernameLabel = usernameWrapper?.getElementsByClassName('label')[0];
    expect(usernameLabel).toHaveClass('label');
    expect(usernameLabel).toHaveTextContent('Логин');

    await userEvent.type(username, 'test username');

    store.dispatch(userRegistrationActions.setUsername(username.value));
    expect(store.getState().userRegistration.username).toEqual('test username');

    await userEvent.tab();

    const errMassage = getByTestId('errMassage');
    expect(errMassage).toHaveTextContent('Не верный формат логина');
    expect(username.value).toBe('test username');

    await userEvent.type(username, 'l');

    expect(errMassage).not.toBeInTheDocument();

    await userEvent.clear(username);
    await userEvent.type(username, 'username');

    expect(username.value).toBe('username');
  });

  it('test password inputs', async () => {
    const {getByTestId} = renderComponentWithProviders(<UserRegistrationForm/>);


    const password = getByTestId('password') as HTMLInputElement;
    expect(password).toBeInTheDocument();
    expect(password).toHaveClass('input');
    expect(password).toHaveAttribute('placeholder', '*****');
    expect(password).toBeRequired();

    const passwordWrapper = password?.parentElement;
    expect(passwordWrapper).toHaveClass('InputWrapper');

    const passwordLabel = passwordWrapper?.getElementsByClassName('label')[0];
    expect(passwordLabel).toHaveClass('label');
    expect(passwordLabel).toHaveTextContent('Пароль');

    const passwordRepeat = getByTestId('password-repeat') as HTMLInputElement;
    expect(passwordRepeat).toBeInTheDocument();
    expect(passwordRepeat).toHaveClass('input');
    expect(passwordRepeat).toHaveAttribute('placeholder', '*****');
    expect(passwordRepeat).toBeRequired();

    const passwordRepeatWrapper = passwordRepeat?.parentElement;
    expect(passwordRepeatWrapper).toHaveClass('InputWrapper');

    const passwordRepeatLabel = passwordRepeatWrapper?.getElementsByClassName('label')[0];
    expect(passwordRepeatLabel).toHaveClass('label');
    expect(passwordRepeatLabel).toHaveTextContent('Повторите пароль');

    await userEvent.type(password, 'bad');

    expect(password.value).toBe('bad');

    await userEvent.tab();

    const errMassage = passwordWrapper?.querySelector('.errMassage');
    expect(errMassage).toHaveTextContent('Слабый пароль');

    await userEvent.clear(password);
    await userEvent.type(password, 'good_pass');
    await userEvent.tab();

    expect(errMassage).not.toBeInTheDocument();

    await userEvent.type(passwordRepeat, 'go');

    const notEqualMsg = passwordRepeatWrapper?.querySelector('.errMassage');
    expect(notEqualMsg).toHaveTextContent('Пароли не совпадают');

    await userEvent.type(passwordRepeat, 'od_pass');

    expect(password.value).toEqual('good_pass');
    expect(passwordRepeat.value).toEqual('good_pass');
    expect(notEqualMsg).not.toBeInTheDocument();
  });
});
