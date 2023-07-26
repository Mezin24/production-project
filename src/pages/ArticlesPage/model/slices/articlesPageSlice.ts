import {
  PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { LOCAL_STORAGE_ARTICLES_VIEW } from 'shared/const/localStorage';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, state.view);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    init: (state) => {
      const localStorageView = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ArticleView;
      state.view = localStorageView || ArticleView.SMALL;
      state.limit = localStorageView === ArticleView.SMALL ? 9 : 4;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }

});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
