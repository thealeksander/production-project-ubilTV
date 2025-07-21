import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';

const commnetsAdapter = createEntityAdapter<CommentType>({
  selectId: (comment: CommentType) => comment.id,
});

export const getArticleComments = commnetsAdapter.getSelectors<StateSchema>(
  state => state.articleDetailsComments || commnetsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commnetsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {
    bookAdded: commnetsAdapter.addOne,
    booksReceived(state, action) {
      commnetsAdapter.setAll(state, action.payload.books);
    },
    addComment: (state, action: PayloadAction<CommentType>) => {
      commnetsAdapter.setOne(state, action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCommentsByArticleId.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<CommentType[]>) => {
          state.isLoading = false;
          commnetsAdapter.setAll(state, action.payload);
        },
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: articleDetailsCommentsReducer,
  actions: articleDetailsCommentsActions,
} = articleDetailsCommentsSlice;
