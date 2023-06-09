import {
  ReducersMapObject, AnyAction, CombinedState, Reducer
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  login?: LoginSchema
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
