import type { Meta, StoryObj } from '@storybook/react';

import { StoreReduxDecorator } from 'shared/config/storybook/StoreReduxDecorator/StoreReduxDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/avatar_test.jpeg';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    StoreReduxDecorator({
      profile: {
        form: {
          username: 'admin',
          age: 22,
          city: 'Samara',
          first: 'asd',
          lastname: 'trh',
          currency: Currency.EUR,
          country: Country.Russia,
          avatar,
        },
      },
    }),
  ],
};
