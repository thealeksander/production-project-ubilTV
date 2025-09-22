import type { Meta, StoryObj } from '@storybook/react';

import { Article } from 'entities/Article';
import { StoreReduxDecorator } from 'shared/config/storybook/StoreReduxDecorator/StoreReduxDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

const data = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: ['IT'],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: ['Программа, которую по традиции называют «Hello, world!»'],
    },
    {
      id: '4',
      type: 'CODE',
      // eslint-disable-next-line max-len
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '2',
      type: 'IMAGE',
      // eslint-disable-next-line max-len
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
  ],
} as Article;

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreReduxDecorator({
      articleDetails: {
        isLoading: false,
        data,
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
