import { Meta, Story } from '@storybook/react/types-6-0';
import { LocationSearch, LocationSearchProps } from '.';

export default {
  title: 'LocationSearch',
  component: LocationSearch,
} as Meta<LocationSearchProps>;

export const Template: Story<LocationSearchProps> = (args) => {
  return (
    <div>
      <LocationSearch {...args} />
    </div>
  );
};
