import { Meta, Story } from '@storybook/react/types-6-0';
import { Humidity, HumidityProps } from '.';

export default {
  title: 'Humidity',
  component: Humidity,
} as Meta<HumidityProps>;

export const Template: Story<HumidityProps> = (args) => {
  return (
    <div>
      <Humidity {...args} />
    </div>
  );
};
