import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejecyedValue>
   = (arg: Arg) => AsyncThunkAction<Return, Arg, {
  rejectValue: RejecyedValue;
}>

export class TestAsyncThunk<Return, Arg, RejecyedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejecyedValue>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejecyedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
