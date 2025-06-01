import type { Meta, StoryObj } from '@storybook/react';

import { StoreReduxDecorator } from 'shared/config/storybook/StoreReduxDecorator/StoreReduxDecorator';
import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const WithError: Story = {
  args: {},
  decorators: [
    StoreReduxDecorator({
      loginForm: { username: 'user123', password: '123', error: 'ERROR' },
    }),
  ],
};

export const WithLoading: Story = {
  args: {},
  decorators: [
    StoreReduxDecorator({
      loginForm: { isLoading: true },
    }),
  ],
};
