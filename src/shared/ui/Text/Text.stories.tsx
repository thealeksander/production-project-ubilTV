import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title exapmle',
    text: 'Text exapmle',
    theme: TextTheme.PRIMARY,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Only title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Only text',
  },
};

export const Error: Story = {
  args: {
    title: 'Title exapmle',
    text: 'Text exapmle',
    theme: TextTheme.ERROR,
  },
};

export const SizeL: Story = {
  args: {
    title: 'Title exapmle',
    text: 'Text exapmle',
    size: TextSize.L,
  },
};
