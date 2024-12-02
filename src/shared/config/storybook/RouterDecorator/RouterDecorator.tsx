import { Decorator } from '@storybook/react/*';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: Decorator = Story => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
