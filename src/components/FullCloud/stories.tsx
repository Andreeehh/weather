import { Meta, Story } from '@storybook/react/types-6-0';
import { FullCloud, FullCloudProps } from '.';

export default {
  title: 'FullCloud',
  component: FullCloud,
} as Meta<FullCloudProps>;

export const Template: Story<FullCloudProps> = (args) => {
  return (
    <div>
      <FullCloud {...args} />
    </div>
  );
};
