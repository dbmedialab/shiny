import styled from 'styled-components';
import { Grid as LibGrid } from 'react-styled-flexboxgrid';

// react-styled-flexboxgrid doesn't apply outerMargin to non-fluid grids.
// We need to add this to fit wallpapers and topbanners.

const Grid = styled(Grid)`
	padding-left: ${props => props.theme.flexboxgrid.outerMargin};
`;

export default Grid;
