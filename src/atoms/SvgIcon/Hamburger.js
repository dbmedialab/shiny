import React from 'react';
import styled from '@emotion/styled';

const Hamburger = props => (
	<svg width="100%" height="100%" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
		<rect x="0" y="0" width="23" height="5" />
		<rect x="0" y="9" width="23" height="5" />
		<rect x="0" y="18" width="23" height="5" />
	</svg>
);

export default styled(Hamburger)`
	&& {
		*[aria-expanded='true'] {
			& rect:nth-child(1) {
				transform: rotate(45deg) scale(1.17, 1) translateY(-2.5px) translateX(2.5px);
			}
			& rect:nth-child(2) {
				transform: scale(0.2, 1) translateX(47px);
			}
			& rect:nth-child(3) {
				transform: rotate(-45deg) scale(1.17, 1) translateY(-4px) translateX(-11.5px);
			}
		}
	}
`;
