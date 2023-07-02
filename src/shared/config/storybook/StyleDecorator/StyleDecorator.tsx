import { Story } from '@storybook/api';
import 'app/styles/index.scss';

export function StyleDecorator(story: () => Story) {
  return story();
}
