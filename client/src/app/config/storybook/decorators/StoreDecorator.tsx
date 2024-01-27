import {Decorator} from '@storybook/react';
import {StoreProvider} from 'app/providers/StoreProvider';

export const StoreDecorator: Decorator = (Story, context) => {
  const {parameters: state} = context;

  return (
    <StoreProvider initialState={state?.state} asyncReducers={{...state.asyncReducers}}>
      <Story/>
    </StoreProvider>
  );
};

