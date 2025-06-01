import type { Preview } from '@storybook/react';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorators/StoreDecorator';
import { StoreReduxDecorator } from '../../src/shared/config/storybook/StoreReduxDecorator/StoreReduxDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';

import { globalTypes } from '../../src/shared/config/storybook/globalTypes/globalTypes';

import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { FullScreenDecorator } from '../../src/shared/config/storybook/FullScreenDecorator/FullScreenDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
  // toolbar в storybook
  globalTypes,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // глобальные изменения на все сторы
  decorators: [
    StoreDecorator,
    StoreReduxDecorator({ loginForm: { username: 'user', password: '123' } }),
    FullScreenDecorator,
    ThemeDecorator,
    RouterDecorator,
    TranslationDecorator,
  ],
};

export default preview;
