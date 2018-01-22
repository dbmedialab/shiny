import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { LinkBarLinkBase } from '../..';

const Arrow = LinkBarLinkBase.withComponent('div').extend`
	line-height: 0;
	font-weight: 800;
	cursor: pointer;

	&& {
		padding-left: ${props => (props.pointsTo === 'left'
		? `calc(1/2 * ${props.theme.variables.horizontalBase})`
		: `calc(1/2 * ${props.theme.variables.horizontalBase})`
	)};
		padding-right: ${props => (props.pointTo === 'left'
		? `calc(1/2 * ${props.theme.variables.horizontalBase})`
		: `calc(1/2 * ${props.theme.variables.horizontalBase})`
	)};
	}
	z-index: 1;
	position: absolute;
	top: 0;
	background: ${props => props.background};
	${props => (props.pointsTo === 'left' ? css`left: 0` : css`right: 0;`)};
`;

export const LeftScrollArrow = props => <Arrow {...props}>&#8826;</Arrow>;
export const RightScrollArrow = props => <Arrow {...props}>&#8827;</Arrow>;
