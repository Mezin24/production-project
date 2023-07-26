import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface fetchArticleListProps {
  page: number
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  fetchArticleListProps,
  ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (props, thunkApi) => {
      const { page = 1 } = props;
      const { extra, rejectWithValue, getState } = thunkApi;
      const limit = getArticlesPageLimit(getState());

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
            _page: page,
            _limit: limit
          }
        });

        if (!response.data) throw new Error();

        return response.data;
      } catch (error) {
        return rejectWithValue('error');
      }
    }
  );
