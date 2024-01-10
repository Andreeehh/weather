import { Meta, Story } from '@storybook/react/types-6-0';
import { Cloud, CloudProps } from '.';

export default {
  title: 'Cloud',
  args: {
    size: 400,
  },
  component: Cloud,
} as Meta<CloudProps>;

export const Template: Story<CloudProps> = (args) => {
  return (
    <div>
      <Cloud {...args} />
    </div>
  );
};
