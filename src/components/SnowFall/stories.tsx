import { Meta, Story } from '@storybook/react/types-6-0';
import { SnowFall, SnowFallProps } from '.';

export default {
  title: 'SnowFall',
  args: {
    numDrops: 100,
  },
  component: SnowFall,
} as Meta<SnowFallProps>;

export const Template: Story<SnowFallProps> = (args) => {
  return (
    <div className="rain">
      <SnowFall {...args} />
    </div>
  );
};
