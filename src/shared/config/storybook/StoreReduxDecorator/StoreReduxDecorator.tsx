import { Decorator } from '@storybook/react/*';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducerList } from 'shared/lib/hooks/useDynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreReduxDecorator =
  (state: DeepPartial<StateSchema>): Decorator =>
  Story => (
    <StoreProvider initialState={state} asyncReducers={defaultAsyncReducers}>
      <Story />
    </StoreProvider>
  );
