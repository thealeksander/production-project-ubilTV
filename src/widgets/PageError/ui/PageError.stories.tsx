import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';

const meta = {
  title: 'widget/PageError',
  component: PageError,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
