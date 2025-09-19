import type { Meta, StoryObj } from '@storybook/react';

import { ArticleType } from 'entities/Article/model/types/article';
import { action } from '@storybook/addon-actions/*';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
  title: 'entities/Artilce/ArticleTypeTabs',
  component: ArticleTypeTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: ArticleType.All,
    onChangeType: action('onChangeType'),
  },
};
