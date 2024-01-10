import { Meta, Story } from '@storybook/react/types-6-0';
import { SunRays, SunRaysProps } from '.';

export default {
  title: 'SunRays',
  component: SunRays,
} as Meta<SunRaysProps>;

export const Template: Story<SunRaysProps> = (args) => {
  return (
    <div>
      <SunRays {...args} />
    </div>
  );
};
