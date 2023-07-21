import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticleDetailsData
} from 'entities/Article/model/selectors/getArticleDetails/getArticleDetails';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>>(
    'addCommentForm/addCommentForArticle',
    async (text, thunkApi) => {
      const {
        extra, rejectWithValue, getState, dispatch
      } = thunkApi;

      const user = getUserAuthData(getState());
      const article = getArticleDetailsData(getState());

      if (!user || !text || !article) {
        return rejectWithValue('no data');
      }

      try {
        const response = await extra.api.post<Comment>('/comments', {
          text,
          articleId: article.id,
          userId: user.id
        });

        if (!response.data) {
          throw new Error();
        }

        // @ts-ignore
        dispatch(fetchCommentsByArticleId(article?.id));
        return response.data;
      } catch (error) {
        return rejectWithValue('error');
      }
    }
  );
