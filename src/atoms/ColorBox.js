import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { getColor } from '../utils';

const ColorDiv = styled.div`
	flex: ${props => (props.isMainShade ? '9 1 20%' : '1 1 20%')};
	padding: 2.4rem 1.4rem;
	background-color: ${props => getColor(props.displayColor)};
	color: ${props => (props.textColor === 'light'
		? getColor('white')
		: getColor('type')
	)};
	text-align: center;

	&::after {
		content: '${props => getColor(props.displayColor)}';
	}
`;

/*
const Small = styled.small`
	color: ${props => (props.textColor === 'light'
		? props.theme.colors.white
		: props.theme.colors.type
	)};
`;
*/

const ColorBox = ({ displayColor, ...rest }) => {
	return (
		<ColorDiv displayColor={displayColor} {...rest}>
			{displayColor}
			<br />
			{/* <Small {...rest}>{theme.colors[displayColor]}</Small> */}
		</ColorDiv>
	);
};

ColorBox.propTypes = {
	displayColor: propTypes.string.isRequired,
	textColor: propTypes.oneOf(['light', 'dark']),
};
ColorBox.defaultProps = {
	textColor: 'dark',
};

export { ColorBox };
