import { Decorator } from '@storybook/react/*';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme ?? Theme.LIGHT;

  return (
    <div className={`app ${storyTheme}`}>
      <Story />
    </div>
  );
};
