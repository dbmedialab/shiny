import propTypes from 'prop-types';

export const themePropTypes = {
	name: propTypes.string.isRequired,
	global: propTypes.string,
	colors: propTypes.shape({
		blue: propTypes.string,
		blueDark: propTypes.string,
		blueLight: propTypes.string,
		blueLighter: propTypes.string,
		brown: propTypes.string,
		brownDark: propTypes.string,
		brownLight: propTypes.string,
		brownLighter: propTypes.string,
		burgundy: propTypes.string,
		burgundyDark: propTypes.string,
		burgundyLight: propTypes.string,
		burgundyLighter: propTypes.string,
		button: propTypes.shape({
			background: propTypes.string,
			color: propTypes.string,
		}),
		darkness: propTypes.string,
		darknessDark: propTypes.string,
		darknessLight: propTypes.string,
		darknessLighter: propTypes.string,
		grayTint: propTypes.string,
		grayTintDark: propTypes.string,
		grayTintLight: propTypes.string,
		grayTintLightDark: propTypes.string,
		grayTintLighter: propTypes.string,
		green: propTypes.string,
		greenDark: propTypes.string,
		greenLight: propTypes.string,
		greenLighter: propTypes.string,
		link: propTypes.string,
		navy: propTypes.string,
		navyDark: propTypes.string,
		navyLight: propTypes.string,
		navyLighter: propTypes.string,
		orange: propTypes.string,
		orangeDark: propTypes.string,
		orangeLight: propTypes.string,
		orangeLighter: propTypes.string,
		pink: propTypes.string,
		pinkDark: propTypes.string,
		pinkLight: propTypes.string,
		pinkLighter: propTypes.string,
		primary: propTypes.string,
		primaryDark: propTypes.string,
		primaryLight: propTypes.string,
		primaryLighter: propTypes.string,
		purple: propTypes.string,
		purpleDark: propTypes.string,
		purpleLight: propTypes.string,
		purpleLighter: propTypes.string,
		sand: propTypes.string,
		sandDark: propTypes.string,
		sandLight: propTypes.string,
		sandLighter: propTypes.string,
		secondary: propTypes.string,
		secondaryDark: propTypes.string,
		secondaryLight: propTypes.string,
		secondaryLighter: propTypes.string,
		teal: propTypes.string,
		tealDark: propTypes.string,
		tealLight: propTypes.string,
		tealLighter: propTypes.string,
		transparent: propTypes.string,
		type: propTypes.string,
		typeDisabled: propTypes.string,
		typeLight: propTypes.string,
		white: propTypes.string,
		whiteDark: propTypes.string,
		whiteLight: propTypes.string,
		whiteLighter: propTypes.string,
		yellow: propTypes.string,
		yellowDark: propTypes.string,
		yellowLight: propTypes.string,
		yellowLighter: propTypes.string,
		black: propTypes.string,

		skinColors: propTypes.shape({
			adWrapperBackgroundColor: propTypes.string,
			adWrapperColor: propTypes.string,
			adWrapperFontColor: propTypes.string,
			anbefalt: propTypes.string,
			bolig: propTypes.string,
			calmBackground: propTypes.string,
			calmBorder: propTypes.string,
			calmText: propTypes.string,
			helse: propTypes.string,
			mat: propTypes.string,
			meninger: propTypes.string,
			motor: propTypes.string,
			nativeAd: propTypes.string,
			primary: propTypes.string,
			redaksjonenanbefaler: propTypes.string,
			reise: propTypes.string,
			secondary: propTypes.string,
			solBlue: propTypes.string,
			solRed: propTypes.string,
			splashBackground: propTypes.string,
			splashBorder: propTypes.string,
			splashText: propTypes.string,
			sport: propTypes.string,
			transparent: propTypes.string,
			underholdning: propTypes.string,
		}),
	}),
	variables: propTypes.shape({
		adWrapperCase: propTypes.string,
		headingHugeLineHeight: propTypes.string,
		headingHugeSize: propTypes.string,
		headingLargeLineHeight: propTypes.string,
		headingLargeSize: propTypes.string,
		headingMediumLineHeight: propTypes.string,
		headingMediumSize: propTypes.string,
		headingRegularLineHeight: propTypes.string,
		headingRegularSize: propTypes.string,
		headingSmallLineHeight: propTypes.string,
		headingSmallSize: propTypes.string,
		headingXlargeLineHeight: propTypes.string,
		headingXlargeSize: propTypes.string,
		headingsFont: propTypes.string,
		horizontalBase: propTypes.string,
		largeWidth: propTypes.string,
		mainFont: propTypes.string,
		uiRegularLineHeight: propTypes.string,
		uiRegularSize: propTypes.string,
		uiSmallLineHeight: propTypes.string,
		uiSmallSize: propTypes.string,
		uiTinyLineHeight: propTypes.string,
		uiTinySize: propTypes.string,
		verticalBase: propTypes.string,

		boldWeight: propTypes.number,
		regularWeight: propTypes.number,
		semiBoldWeight: propTypes.number,
		unitlessHorizontalBase: propTypes.number,
		unitlessVerticalBase: propTypes.number,
	}),
	flexboxgrid: propTypes.shape({
		breakpoints: propTypes.shape({
			lg: propTypes.number,
			md: propTypes.number,
			sm: propTypes.number,
			xs: propTypes.number,
		}),
		container: propTypes.shape({
			lg: propTypes.number,
			md: propTypes.number,
			sm: propTypes.number,
		}),
		gridSize: propTypes.number,
		gutterWidth: propTypes.number,
		mediaQuery: propTypes.string,
		outerMargin: propTypes.number,
	}),
};
