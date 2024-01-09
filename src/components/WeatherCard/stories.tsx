import { Meta, Story } from '@storybook/react/types-6-0';
import { WeatherCard, WeatherCardProps } from '.';

import mock from './mock';

export default {
  title: 'WeatherCard',
  args: mock,
  component: WeatherCard,
} as Meta<WeatherCardProps>;

export const Template: Story<WeatherCardProps> = (args) => {
  return (
    <div>
      <WeatherCard {...args} />
    </div>
  );
};
