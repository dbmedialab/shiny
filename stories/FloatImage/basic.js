import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

import { FloatImage } from '../../src/molecules/FloatImage';

export default () => (
	<section>
		<HugeHeading>Float image</HugeHeading>

		<Heading>Demo</Heading>
		<DemoContainer>
			<FloatImage width="50%" url="http://styleguide.dagbladet.no/assets/test/978x.jpg" />
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code>
			{`
import { FloatImage } from '@aller/shiny';

<FloatImage width="50%" src="http://styleguide.dagbladet.no/assets/test/978x.jpg" />
			`}
		</Code>
	</section>
);
