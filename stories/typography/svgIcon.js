/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Code } from '../../src/atoms/Code';

import { Row } from '../../src/atoms/Row';
import { Col } from '../../src/atoms/Col';

import { HugeHeading, SmallHeading } from '../../src/atoms/Heading';
import { ActivityTime } from '../../src/atoms/SvgIcon';

export default () => (
	<section>
		<Row>
			<Col xs={12}>
				<HugeHeading>Icon</HugeHeading>
				<p>ICONS.</p>
				<SmallHeading>Usage</SmallHeading>
				<Code language="jsx">
					{`
import { ActivityTime } from '@aller/shiny';

<ActivityTime size={10} />
					`}
				</Code>
				<SmallHeading>Props</SmallHeading>
				<table>
					<thead>
						<tr>
							<th>Prop</th>
							<th>Description</th>
							<th>Required/optional</th>
							<th>Type</th>
							<th>default</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>size</td>
							<td>The size of the Icon in rem</td>
							<td>optional</td>
							<td>int</td>
							<td>size of wrapping element</td>
						</tr>
					</tbody>
				</table>
			</Col>
		</Row>

		<Row>
			<Col xs={12}><SmallHeading>Demo</SmallHeading></Col>
		</Row>

		<Row>
				<Col xs={2}>
					<ActivityTime />
					<div>a</div>
				</Col>
		</Row>
	</section>
);
