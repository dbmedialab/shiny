import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';
import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Kicker } from '../../src/atoms/Kicker';
import { NativeAdKicker } from '../../src/atoms/NativeAdKicker';

export default () => (
	<section>
		<HugeHeading>Kicker heading</HugeHeading>
		<Paragraph>Also called deck, stikktittel.</Paragraph>

		<Paragraph>There is also a <code>&lt;NativeAdKicker&gt;</code> with a predefined color.</Paragraph>

		<Heading>Demo</Heading>
		<DemoContainer>
			<Kicker>Kicker</Kicker>
			<Kicker backgroundColor="teal">Kicker</Kicker>
			<Kicker backgroundColor="secondaryLight" textColor="type">Kicker</Kicker>
			<NativeAdKicker>Annonsørinnhold: Hurra</NativeAdKicker>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	Kicker,
	NativeAdKicker,
} from '@aller/shiny';

<Kicker>Kicker</Kicker>
<Kicker backgroundColor="teal">Kicker</Kicker>
<Kicker backgroundColor="secondaryLight" textColor="type">Kicker</Kicker>
<NativeAdKicker>Annonsørinnhold: Hurra</NativeAdKicker>
			`}
		</Code>
		<Paragraph>
			The <code>color</code> and <code>textColor</code> props can be any of the colors names in the palette.
			They default to &quot;primary&quot; and &quot;white&quot;.
		</Paragraph>
	</section>
);
