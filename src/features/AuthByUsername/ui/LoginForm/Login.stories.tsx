import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { LoginForm } from './LoginForm';

const meta = {
  title: 'features/Input',
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
