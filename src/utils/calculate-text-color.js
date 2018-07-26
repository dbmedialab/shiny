import { getColor, isBright } from '../utils';

export const calculateTextColorFromName = (color, props) => {
	const themeColor = getColor(color)(props);
	return isBright(themeColor) ? getColor('grayTintDark')(props) : getColor('white')(props);
};

export const calculateTextColorFromTheme = (theme, backgroundColor=theme.colors.primary) => (
	isBright(backgroundColor)
		? getColor('grayTintDark')
		: getColor('white')
);
