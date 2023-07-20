import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Some title text',
  text: 'Some very long text in the text component'
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Some title text',
  text: 'Some very long text in the text component',
  size: TextSize.L
};

export const Error = Template.bind({});
Error.args = {
  title: 'Some title text',
  text: 'Some very long text in the text component',
  theme: TextTheme.ERROR
};

export const withTitle = Template.bind({});
withTitle.args = {
  title: 'Some title text',
};

export const withText = Template.bind({});
withText.args = {
  text: 'Some very long text in the text component'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Some title text',
  text: 'Some very long text in the text component'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const withTitleDark = Template.bind({});
withTitleDark.args = {
  title: 'Some title text',
};
withTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const withTextDark = Template.bind({});
withTextDark.args = {
  text: 'Some very long text in the text component'
};
withTextDark.decorators = [ThemeDecorator(Theme.DARK)];
