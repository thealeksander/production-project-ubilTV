import { Meta, StoryObj } from '@storybook/react/*';
import { ListBox } from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: '153',
    items: [
      {
        content: '131244',
        value: '123',
      },
      {
        content: '4567',
        value: '153',
      },
      {
        content: '768',
        value: '127',
      },
    ],
    onChange: () => {},
  },
};
