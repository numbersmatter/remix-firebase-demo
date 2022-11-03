import React from 'react';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import TopNavBar from '../../app/componets/appShell/TopNavBar';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  // title: 'Butt',
  component: TopNavBar,
} as ComponentMeta<typeof TopNavBar>;

export const Main: ComponentStory<typeof TopNavBar> = () => <TopNavBar />;
