import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleItem } from './ArticleItem';

export default {
  title: 'shared/ArticleItem',
  component: ArticleItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleItem>;

const Template: ComponentStory<typeof ArticleItem> = (args) => <ArticleItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
