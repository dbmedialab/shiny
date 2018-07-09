import { cssReset } from '../../utils/css-reset';

import colors from './colors';

const variables = {
	mainFont: "'Open Sans', helvetica, arial, sans-serif",
	headingsFont: "'Open Sans', helvetica, arial, sans-serif",

	uiRegularSize: '1.6rem',
	uiRegularLineHeight: '2.4rem',
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800');

	${cssReset}

	body {
		color: ${colors[colors.skinColors.type]};
		font-family: ${variables.mainFont};
		font-weight: 400;
		font-size: ${variables.uiRegularSize};
		line-height: ${variables.uiRegularLineHeight};
	}

	a {
		color: ${colors.skinColors.link};
		text-decoration: underline;
		line-height: inherit;

		&:visited {
			color: ${colors.skinColors.linkVisited};
		}
	}
`;

const theme = {
	name: 'DinSide',
	global,
	colors,
	variables,
};

export default theme;
