import {
  ReducersMapObject, AnyAction, CombinedState, Reducer, Dispatch
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import { To, NavigateOptions } from 'react-router-dom';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  login?: LoginSchema,
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManagerInterface {
  getReducerMap: () => ReducersMapObject<StateSchema> ;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer:Reducer) => void;
  remove: (key:StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore {
  reducerManager: ReducerManagerInterface
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg,
  dispatch: Dispatch
}
