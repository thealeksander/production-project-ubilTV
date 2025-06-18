import type { Meta, StoryObj } from '@storybook/react';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/avatar_test.jpeg';
import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
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
};

export const withError: Story = {
  args: {
    error: 'true',
  },
};

export const isLoading: Story = {
  args: {
    isLoading: true,
  },
};
