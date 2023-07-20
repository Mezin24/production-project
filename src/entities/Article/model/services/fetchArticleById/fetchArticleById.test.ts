import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunkn/TestAsyncThunkn';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchArticleById } from './fetchArticleById';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

const data = {
  id: '1',
  title: 'title'
};

describe('fetchArticleById', () => {
  test('success login', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(
      Promise.resolve({ data })
    );
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(
      Promise.resolve({ status: 403 })
    );
    const result = await thunk.callThunk('2');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
