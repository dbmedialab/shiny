import React from 'react';
import styled from '@emotion/styled';
import { getColor, getVariable } from '../utils';
import { SvgIcon } from './SvgIcon';

const StyledCog = styled.button`
	position: absolute;
	left: 0;
	top: 0;
	padding: calc(${getVariable('horizontalBase')} / 4);
	background-color: ${getColor('background')};
	opacity: 0.5;
	filter: alpha(opacity=50);
	line-height: 0;
	cursor: pointer;
	border-width: 0px;
`;

const AdSettingsCog = props => (
	<StyledCog {...props}>
		<SvgIcon name="settings" set="dorris" color="type" size={1.6} fill="currentColor" />
	</StyledCog>
);

export { AdSettingsCog };
