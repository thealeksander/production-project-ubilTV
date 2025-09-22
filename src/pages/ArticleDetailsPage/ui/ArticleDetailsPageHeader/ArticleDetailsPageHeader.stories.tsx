import { Meta, StoryObj } from '@storybook/react/*';
import { StoreReduxDecorator } from 'shared/config/storybook/StoreReduxDecorator/StoreReduxDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPageHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreReduxDecorator({
      articleDetails: {
        isLoading: false,
      },
    }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    StoreReduxDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
};

export const Error: Story = {
  args: {},
  decorators: [
    StoreReduxDecorator({
      articleDetails: {
        error: 'Ошибка',
      },
    }),
  ],
};
