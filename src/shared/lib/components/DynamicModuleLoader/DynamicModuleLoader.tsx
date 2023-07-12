import { Reducer } from '@reduxjs/toolkit';
import {
  ReduxStoreWithManager,
  StateSchemaKey
} from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

interface DynamicModuleLoaderProps {
  name: StateSchemaKey;
  reducer: Reducer,
  removeAfterUnmount: boolean
}
export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    name,
    reducer,
    removeAfterUnmount = true
  } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    store.reducerManager.add(name, reducer);
    dispatch({ type: `@@INIT ${name} reducer` });

    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(name);
        dispatch({ type: `@@UNMOUNT ${name} reducer` });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    // eslint-disable-next-line
    <>
      { children }
    </>
  );
};
