import { Meta, Story } from '@storybook/react/types-6-0';
import { WeatherInfo, WeatherInfoProps } from '.';

import mock from './mock';

export default {
  title: 'WeatherInfo',
  args: mock,
  component: WeatherInfo,
} as Meta<WeatherInfoProps>;

export const Template: Story<WeatherInfoProps> = (args) => {
  return (
    <div>
      <WeatherInfo {...args} />
    </div>
  );
};
