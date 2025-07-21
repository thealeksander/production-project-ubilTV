import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { CommentType } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  CommentType,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

  const userData = getUserAuthData(getState());
  const article = getArticleDetailsData(getState());

  if (!userData || !text || !article) {
    return rejectWithValue('no data');
  }

  try {
    const response = await extra.api.post<CommentType>('/comments', {
      articleId: article?.id,
      userId: userData.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(fetchCommentsByArticleId(article.id));

    return response.data;
  } catch (e) {
    return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
  }
});
