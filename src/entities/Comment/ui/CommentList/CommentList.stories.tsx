import type { Meta, StoryObj } from '@storybook/react';

import { StoreReduxDecorator } from 'shared/config/storybook/StoreReduxDecorator/StoreReduxDecorator';
import { CommentList } from './CommentList';

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'hello, world!',
        user: { id: '1', username: 'Vasya' },
      },
      {
        id: '2',
        text: 'Okey!',
        user: { id: '2', username: 'Petya' },
      },
    ],
  },
  decorators: [StoreReduxDecorator({})],
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
  decorators: [StoreReduxDecorator({})],
};
