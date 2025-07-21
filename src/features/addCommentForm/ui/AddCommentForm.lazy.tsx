import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      // Так в реальности проектах делать не надо!!! Это только в рамках обучения
      setTimeout(() => resolve(import('./AddCommentForm')), 1500);
    }),
);
