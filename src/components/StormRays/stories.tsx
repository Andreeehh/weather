import { Meta, Story } from '@storybook/react/types-6-0';
import { StormRays, StormRaysProps } from '.';

export default {
  title: 'StormRays',
  component: StormRays,
  args: {
    count: 5,
    length: 100,
    thickness: 3,
  },
} as Meta<StormRaysProps>;

export const Template: Story<StormRaysProps> = (args) => {
  return (
    <div>
      <StormRays {...args} />
    </div>
  );
};
