import Styled from 'styled-components';

const SvgIconWrapper = Styled.div`
	display: inline-block;
	text-align: center;
	width: ${props => props.size}rem;
	
	${props => (props['size-sm'] && `
	@media (max-width: ${props.theme.flexboxgrid.breakpoints.md}em) {
		width: ${props['size-sm']}rem;
 	}`)}
 	
 	path {
 		fill: ${props => props.theme.colors[props.color]};
 	}
`;

export { SvgIconWrapper };
