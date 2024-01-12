import { Meta, Story } from '@storybook/react/types-6-0';
import { FullCloud } from '.';

export default {
  title: 'FullCloud',
  component: FullCloud,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <FullCloud {...args} />
    </div>
  );
};
