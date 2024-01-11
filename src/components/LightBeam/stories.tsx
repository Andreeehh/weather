// lightbeam.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { LightBeams, LightBeamsProps } from '.';

export default {
  title: 'LightBeam',
  component: LightBeams,
} as Meta;

const Template: Story<LightBeamsProps> = (args) => <LightBeams {...args} />;

export const Default = Template.bind({});
Default.args = {
  duration: '3s',
};
