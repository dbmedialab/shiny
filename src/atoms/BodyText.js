import styled from 'styled-components';

import {
	getColor,
	getVariable,
} from '../utils';

const BodyText = styled.p`
	margin-bottom: ${getVariable('verticalBase')};
	font-size: ${getVariable('uiRegularSize')};
	line-height: ${getVariable('uiRegularLineHeight')};
	font-weight: ${getVariable('regularWeight')};
	color: ${getColor('type')};
	text-rendering: optimizeLegibility;
`;

export { BodyText };
