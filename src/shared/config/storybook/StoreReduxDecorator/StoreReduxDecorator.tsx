import { Decorator } from '@storybook/react/*';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/addCommentForm/module/slices/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ReducerList } from 'shared/lib/hooks/useDynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  articlesPage: articlesPageReducer,
};

export const StoreReduxDecorator =
  (state: DeepPartial<StateSchema>): Decorator =>
  Story => (
    <StoreProvider initialState={state} asyncReducers={defaultAsyncReducers}>
      <Story />
    </StoreProvider>
  );
