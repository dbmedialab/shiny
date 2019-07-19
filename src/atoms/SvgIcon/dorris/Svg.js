import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { getColor } from '../../../utils/get-color';

const StyledSvg = styled(svg)`
	/* Workaround for old webkit browsers */
	/* https://bugs.webkit.org/show_bug.cgi?id=82489 */
	max-height: 100%;
`

const Svg = ({ color, ...rest }) => {
	const stroke = getColor(color)(rest);

	return (<StyledSvg
		viewBox="0 0 33 33"
		fill="none"
		stroke={stroke}
		strokeWidth={1.5}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeMiterlimit={10}
		{...rest}
	/>);
};
Svg.propTypes = {
	color: PropTypes.string,
};
Svg.defaultProps = {
	color: 'splashBackground',
};

export default withTheme(Svg);
