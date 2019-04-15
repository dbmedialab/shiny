import styled from '@emotion/styled';
import { getColor } from '../../utils';

const SvgIconWrapper = styled.div`
	display: inline-block;
	text-align: center;
	width: ${props => props.size}rem;
	& svg {
		& rect {
			transition: .1s transform;
		}
	}
	${props => (props['size-sm'] && `
	@media (max-width: ${props.theme.flexboxgrid.breakpoints.md}em) {
		width: ${props['size-sm']}rem;
 	}`)}

 	${props => props.color && `
		svg{
			path, rect {
				fill: ${getColor(props.color)(props)};
			}
			stroke: ${getColor(props.color)(props)}
		}
 	`}
`;

export { SvgIconWrapper };
