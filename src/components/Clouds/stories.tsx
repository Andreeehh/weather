import { Meta, Story } from '@storybook/react/types-6-0';
import { Clouds, CloudsProps } from '.';

export default {
  title: 'Clouds',
  component: Clouds,
} as Meta<CloudsProps>;

export const Template: Story<CloudsProps> = (args) => {
  return (
    <div>
      <Clouds {...args} />
    </div>
  );
};
