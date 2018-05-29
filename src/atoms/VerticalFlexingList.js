import propTypes from 'prop-types';
import styled from 'styled-components';

import { getVariable } from '../utils';
import { LinkBarDropdown } from './LinkBarDropdown';


// Originally written for the VerticalLinkBar molecule
const VerticalFlexingList = styled.ul`
	display: inline-block;
	margin: 0;
	padding: 0;
	font-family: ${props => props.theme.variables.mainFont};
	background: ${props => props.background};
	position: relative;

	width: 100%;
	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
		width: auto;
	}

	${LinkBarDropdown} + div & {
		display: ${props => (props.hide ? 'none' : 'flex')};
		flex-direction: column;
		min-width: calc(14 * ${getVariable('horizontalBase')});
		position: absolute;
		top: 100%;
		left: ${props => (props.align === 'left' ? 0 : 'initial')};
		right: ${props => (props.align === 'right' ? 0 : 'initial')};
		box-shadow: 0 0 2rem 0 rgba(0,0,0,.15);

		::before {
			content: '';
			display: block;
			width: ${props => props.theme.variables.verticalBase};
			height: ${props => props.theme.variables.verticalBase};
			background: ${props => props.background};
			position: absolute;
			left: ${props => (props.align === 'left' ? `calc(1/4 * ${props.theme.variables.verticalBase})` : 'inital')};
			right: ${props => (props.align === 'right' ? `calc(1/4 * ${props.theme.variables.verticalBase})` : 'inital')};
			transform: rotate(45deg);
		}
	}
`;
VerticalFlexingList.propTypes = {
	align: propTypes.oneOf(['left', 'right']),
};
VerticalFlexingList.defaultProps = {
	align: 'left',
};

export { VerticalFlexingList };
