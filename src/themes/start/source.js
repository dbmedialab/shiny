import { cssReset } from '../../utils/css-reset';

import colors from './colors';
import variables from './variables';

const global = `
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400');

	${cssReset}
`;

const theme = {
	name: 'Start',
	global,
	colors,
	variables,
};

console.log(theme)
