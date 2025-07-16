import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleCodeBlock } from './ArticleCodeBlock';

const meta = {
  title: 'entities/ArticleCodeBlock',
  component: ArticleCodeBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleCodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    block: {
      code: '',
      id: '',
      type: ArticleBlockType.CODE,
    },
  },
};
