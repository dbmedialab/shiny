import React from 'react';
import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../src/storybook-decorators/PaddedGrid';
import { DemoContainer } from './storybook-components';

import { Heading, HugeHeading } from '../src/atoms/Heading';
import { Code } from '../src/atoms/Code';

// Loaders
import { DotLoader } from '../src/atoms/loaders/DotLoader';
// import { NoonLoader } from '../shared-components/NoonLoader/NoonLoader';
import { LoadingSearchIcon } from '../src/atoms/loaders/LoadingSearchIcon';

export default () => {
	storiesOf('Loaders', DotLoader)
		.addDecorator(StorybookPaddedGrid)
	/*
	// @TODO Add story for NoonLoader
      .add('NoonLoader', () => {
        return (
          <section>
            <HugeHeading>NoonLoader</HugeHeading>
            <p>Should be used when loading content that will add to the height</p>

            <Heading>Usage</Heading>
            <DemoContainer>
              <NoonLoader classes={'what-you-will'} />
            </DemoContainer>
          </section>
        );
      })
      */
		.add('DotLoader', () => {
			return (
				<section>
					<HugeHeading>DotLoader</HugeHeading>
					<p>Should be used when loading content that will fill a already defined space</p>

					<Heading>Demo</Heading>
					<DemoContainer>
						<DotLoader classes={'what-you-will'} />
					</DemoContainer>

					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import { DotLoader } from '@aller/shiny';

<DotLoader />
						`}
					</Code>
				</section>
			);
		})
		.add('LoadingSearchIcon', () => {
			return (
				<section>
					<HugeHeading>LoadingSearchIcon</HugeHeading>
					<p>
						This is used by the NewsSearch component when loading articles. Works well with the SearchIcon.
						Color defaults to primary.
					</p>

					<Heading>Usage</Heading>
					<DemoContainer>
						<LoadingSearchIcon />
					</DemoContainer>
					<DemoContainer>
						<LoadingSearchIcon color="hotpink" />
					</DemoContainer>
				</section>
			);
		});
};
