import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
	box-sizing: border-box;
	fill: ${props => (props.fill ? props.theme.colors[props.fill] : props.theme.colors.white)};
	background: ${props => (props.background ? props.theme.colors[props.background] : props.theme.colors.primary)}
`;

/* eslint-disable max-len */
const KKLogo = props => (
	<Svg width="25px" height="20px" viewBox="0 0 25 20" version="1.1">
		<g id="Symbols---Ikoner" stroke="none" strokeWidth="1" fill="#333333" fillRule="evenodd">
			<g id="Desktop-HD" transform="translate(-123.000000, -360.000000)" fill="#ffffff">
				<g id="icon_logo2" transform="translate(123.000000, 360.000000)">
					<path d="M3.97918913,0.120931971 C4.10787944,0.120931971 4.21321613,0.234523567 4.21321613,0.373223292 L4.21321613,19.7269019 C4.21321613,19.8656016 4.10787944,19.9791932 3.97918913,19.9791932 L1.15725969,19.9791932 C1.02856939,19.9791932 0.92330282,19.8656016 0.92330282,19.7269019 L0.92330282,0.373223292 C0.92330282,0.234523567 1.02856939,0.120931971 1.15725969,0.120931971 L3.97918913,0.120931971" id="Fill-1-Copy-2" />
					<path d="M16.7521127,0.120931971 C16.880803,0.120931971 16.9861397,0.234523567 16.9861397,0.373223292 L16.9861397,19.7269019 C16.9861397,19.8656016 16.880803,19.9791932 16.7521127,19.9791932 L13.9301832,19.9791932 C13.8014929,19.9791932 13.6962264,19.8656016 13.6962264,19.7269019 L13.6962264,0.373223292 C13.6962264,0.234523567 13.8014929,0.120931971 13.9301832,0.120931971 L16.7521127,0.120931971" id="Fill-1-Copy-3" />
					<path d="M3.80834626,12.9861255 C3.73695295,12.870492 3.74733233,12.6901219 3.83141935,12.5849249 L7.46181846,8.05336133 C7.68644791,7.7768694 7.95995865,7.61865794 8.13360289,7.54340918 C8.29504436,7.47337867 8.57465648,7.36871105 8.92755546,7.36871105 L11.7139285,7.36871105 C11.8427591,7.36871105 11.8785259,7.45401819 11.7933869,7.55808079 L7.52100899,12.7888906 L11.9119082,19.7763619 C11.9885613,19.8879872 11.9459918,19.9791932 11.8172314,19.9791932 L9.51826851,19.9791932 C8.98485245,19.9791932 8.62851706,19.8749037 8.32849682,19.7229693 C8.03997807,19.5767069 7.74213189,19.3232055 7.45740021,18.888124 L3.80834626,12.9861255" id="Fill-2-Copy-2" />
					<path d="M16.5812698,12.9861255 C16.5098765,12.870492 16.5202559,12.6901219 16.6043429,12.5849249 L20.234742,8.05336133 C20.4593715,7.7768694 20.7328822,7.61865794 20.9065264,7.54340918 C21.0679679,7.47337867 21.34758,7.36871105 21.700479,7.36871105 L24.486852,7.36871105 C24.6156826,7.36871105 24.6514494,7.45401819 24.5663104,7.55808079 L20.2939325,12.7888906 L24.6848317,19.7763619 C24.7614849,19.8879872 24.7189154,19.9791932 24.5901549,19.9791932 L22.291192,19.9791932 C21.757776,19.9791932 21.4014406,19.8749037 21.1014204,19.7229693 C20.8129016,19.5767069 20.5150554,19.3232055 20.2303237,18.888124 L16.5812698,12.9861255" id="Fill-2-Copy-3" />
				</g >
			</g >
		</g >
	</Svg>
);
/* eslint-enable max-len */

export { KKLogo };
