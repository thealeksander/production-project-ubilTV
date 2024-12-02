import { Decorator } from '@storybook/react/*';
import 'app/styles/index.scss';

export const FullScreenDecorator: Decorator = Story => (
  <div style={{ height: '100vh' }}>
    <Story />
  </div>
);
