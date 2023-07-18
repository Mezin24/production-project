import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import AvatarImg from 'shared/assets/test/avatar.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    name: 'Ivan',
    lastname: 'Ivanov',
    age: 23,
    city: 'Moscow',
    country: Country.Russia,
    currency: Currency.RUB,
    username: 'Vania',
    avatar: AvatarImg
  }
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};

export const Error = Template.bind({});
Error.args = {
  error: 'true'
};
