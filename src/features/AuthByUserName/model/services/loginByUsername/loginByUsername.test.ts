import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunkn/TestAsyncThunkn';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
  test('success login', async () => {
    const userValue = { id: '1', username: '123' };
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ data: userValue })
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ password: '123', username: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ status: 403 })
    );
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ password: '123', username: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });

  // WITHOUT HELPER CLASS
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('success login', async () => {
  //   const userValue = { id: '1', username: '123' };
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({ data: userValue })
  //   );
  //   const action = loginByUsername({ password: '123', username: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValue);
  // });

  // test('error login', async () => {
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({ status: 403 })
  //   );
  //   const action = loginByUsername({ password: '123', username: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toEqual('error');
  // });
});
