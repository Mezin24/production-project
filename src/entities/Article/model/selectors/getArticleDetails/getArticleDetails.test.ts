import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from './getArticleDetails';

describe('getArticleDetails', () => {
  test('should return data', () => {
    const data: Article = {
      id: '1',
      title: 'title'
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('should return data with empty value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test('should return isLoading with empty value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should return isLoading with empty value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
