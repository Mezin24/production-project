import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  login: {
    username: 'user',
    password: '123'
  }
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
  login: {
    error: 'Error happened'
  }
})];

export const loading = Template.bind({});
loading.args = {};
loading.decorators = [StoreDecorator({
  login: {
    isLoading: true
  }
})];
