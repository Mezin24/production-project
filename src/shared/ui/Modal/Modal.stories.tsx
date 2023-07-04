import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi ipsum quo temporibus sit quidem magni exercitationem nisi sunt et.',
  isOpen: true
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi ipsum quo temporibus sit quidem magni exercitationem nisi sunt et.',
  isOpen: true
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
