import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleImageBlock } from './ArticleImageBlock';

const meta = {
  title: 'entities/ArticleImageBlock',
  component: ArticleImageBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleImageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    block: {
      src: '',
      title: '',
      id: '',
      type: ArticleBlockType.IMAGE,
    },
  },
};
