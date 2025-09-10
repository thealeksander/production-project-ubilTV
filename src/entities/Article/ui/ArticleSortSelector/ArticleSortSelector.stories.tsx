import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    sort: ArticleSortField.CREATED,
    order: 'asc',
    onChangeOrder: () => {},
    onChangeSort: () => {},
  },
};
