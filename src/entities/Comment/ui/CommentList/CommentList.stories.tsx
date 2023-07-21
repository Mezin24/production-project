import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'Test comment 1',
      user: { id: '1', username: 'user 1' }
    },
    {
      id: '2',
      text: 'Test comment 2',
      user: { id: '2', username: 'user 2' }
    },
    {
      id: '3',
      text: 'Test comment 3',
      user: { id: '3', username: 'user 3' }
    },
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true
};
