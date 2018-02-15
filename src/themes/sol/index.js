import { css } from 'styled-components';

import colors from './colors';
import variables from './variables';

const global = css`
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');

	html, html * {
		box-sizing: border-box;
	}
`;

export default {
	name: 'SOL',
	global,
	colors,
	variables,
};
