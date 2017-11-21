import React from 'react';

import LeetTextarea from '../../src/atoms/LeetTextarea';

import { SiteSelection } from '../storybook-components';
import Heading, { SmallHeading } from '../../src/atoms/Heading';
import Label from '../../src/atoms/Label';

export default () => (
	<SiteSelection>
		<section>
			<Heading>Label</Heading>
			<SmallHeading>Preview</SmallHeading>
			<Label color="primary">Primary</Label>
			<Label color="teal">Teal</Label>
			<Label>Default</Label>

			<SmallHeading>Usage</SmallHeading>
			<LeetTextarea>{`
import Label from '/path/to/src/atoms/Label';

<Label color="primary">Primary</Label>
<Label color="teal">Teal</Label>
<Label>Default</Label>
      `}
			</LeetTextarea>
			<p>The «color» prop can be any of the colors names in the palette. Defaults to «primary».</p>
		</section>
	</SiteSelection>
);
