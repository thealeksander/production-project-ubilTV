import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';

import { ArticleView } from '../../model/types/article';

const meta = {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {
  args: {
    view: ArticleView.LIST,
  },
};

export const Small: Story = {
  args: {
    view: ArticleView.TILE,
  },
};
