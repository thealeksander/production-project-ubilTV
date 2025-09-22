import { lazy } from 'react';

export const ArticleDetailsPageLazy = lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      // Так в реальности проектах делать не надо!!! Это только в рамках обучения
      setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
    }),
);
