import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleTextBlock } from './ArticleTextBlock';

const meta = {
  title: 'entities/ArticleTextBlock',
  component: ArticleTextBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleTextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    block: {
      id: '',
      type: ArticleBlockType.TEXT,
      paragraphs: [],
    },
  },
};
