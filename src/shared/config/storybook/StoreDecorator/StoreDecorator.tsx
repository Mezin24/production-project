import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
  login: loginReducer,
  profile: profileReducer
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
