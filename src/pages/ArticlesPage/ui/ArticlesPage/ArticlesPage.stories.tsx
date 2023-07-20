import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticlesPages from './ArticlesPage';

export default {
  title: 'pages/ArticlePages',
  component: ArticlesPages,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPages>;

const Template: ComponentStory<typeof ArticlesPages> = (args) => <ArticlesPages {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
