import { Meta, Story } from '@storybook/react/types-6-0';
import { RainComponent, RainProps } from '.';

export default {
  title: 'Rain',
  args: {
    numDrops: 100,
  },
  component: RainComponent,
} as Meta<RainProps>;

export const Template: Story<RainProps> = (args) => {
  return (
    <div className="rain">
      <RainComponent {...args} />
    </div>
  );
};
