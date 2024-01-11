import { Meta, Story } from '@storybook/react/types-6-0';
import { Moon } from '.';

export default {
  title: 'Moon',
  component: Moon,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Moon {...args} />
    </div>
  );
};
