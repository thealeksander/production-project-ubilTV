import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Text } from '../Text/Text';

import { Card } from './Card';

const meta = {
  title: 'shared/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: <Text title="test" text="text text" />,
  },
};
