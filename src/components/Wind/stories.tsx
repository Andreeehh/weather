import { Meta, Story } from '@storybook/react/types-6-0';
import { Wind, WindProps } from '.';

export default {
  title: 'Wind',
  component: Wind,
} as Meta<WindProps>;

export const Template: Story<WindProps> = (args) => {
  return (
    <div>
      <Wind {...args} />
    </div>
  );
};
