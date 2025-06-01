import { DeepPartial } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react/*';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreReduxDecorator =
  (state: DeepPartial<StateSchema>): Decorator =>
  Story => (
    <StoreProvider initialState={state}>
      <Story />
    </StoreProvider>
  );
