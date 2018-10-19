import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import basicIssue from './basic-issue';
import rowWithThreePlugs from './row-with-three-plugs';
import kicker from './kicker';
import allCaps from './all-caps';
import customHeading from './custom-heading';
import TrysilPlugWithoutBlurStory from './without-blur';
import TrysilPlugWithFadeInStory from './with-fadein';
import textColorOnHover from './text-color-hover';
import TrysilPlugWithColStory from './with-col';

export default () => {
	storiesOf('TrysilPlug', module)
		.addDecorator(StorybookPaddedGrid)
		.add('TrysilPlug', basicIssue)
		.add('... without blur', TrysilPlugWithoutBlurStory)
		.add('... with fadein', TrysilPlugWithFadeInStory)
		.add('... as Col', TrysilPlugWithColStory)
		.add('Custom Heading', customHeading)
		.add('DymoHeading with hover shade', textColorOnHover)
		.add('With Kicker', kicker)
		.add('All caps', allCaps)
		.add('Row with three plugs', rowWithThreePlugs);
};
