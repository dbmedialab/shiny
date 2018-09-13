const mapping = getMapping();

module.exports = function transformImports(importName, matches) {
	if (mapping[importName]) {
		return mapping[importName];
	}
	throw new Error(`${importName} is not in mapping`);
};

function getMapping() {
	return {
		themes: '../themes',
		HorizontalOverflowGradient: '../atoms/HorizontalOverflowGradient',
		ShinyThemeProvider: '../atoms/ShinyThemeProvider',
		Heading: '../atoms/Heading',
		SmallHeading: '../atoms/Heading',
		MediumHeading: '../atoms/Heading',
		LargeHeading: '../atoms/Heading',
		XLargeHeading: '../atoms/Heading',
		HugeHeading: '../atoms/Heading',
		DymoHeading: '../atoms/DymoHeading',
		SmallDymoHeading: '../atoms/DymoHeading',
		MediumDymoHeading: '../atoms/DymoHeading',
		LargeDymoHeading: '../atoms/DymoHeading',
		XLargeDymoHeading: '../atoms/DymoHeading',
		HugeDymoHeading: '../atoms/DymoHeading',
		PlugHeading: '../atoms/PlugHeading',
		SmallPlugHeading: '../atoms/PlugHeading',
		MediumPlugHeading: '../atoms/PlugHeading',
		LargePlugHeading: '../atoms/PlugHeading',
		XLargePlugHeading: '../atoms/PlugHeading',
		HugePlugHeading: '../atoms/PlugHeading',
		UnderlinedHeading: '../atoms/UnderlinedHeading',
		UnderlinedXSmallHeading: '../atoms/UnderlinedHeading',
		UnderlinedSmallHeading: '../atoms/UnderlinedHeading',
		UnderlinedMediumHeading: '../atoms/UnderlinedHeading',
		UnderlinedLargeHeading: '../atoms/UnderlinedHeading',
		UnderlinedXLargeHeading: '../atoms/UnderlinedHeading',
		UnderlinedHugeHeading: '../atoms/UnderlinedHeading',
		FrontSmallHeading: '../atoms/FrontHeading',
		FrontMediumHeading: '../atoms/FrontHeading',
		FrontLargeHeading: '../atoms/FrontHeading',
		FrontXLargeHeading: '../atoms/FrontHeading',
		FrontHugeHeading: '../atoms/FrontHeading',
		SmallHorizontalHeroUnit: '../molecules/HorizontalHeroUnit',
		MediumHorizontalHeroUnit: '../molecules/HorizontalHeroUnit',
		LargeHorizontalHeroUnit: '../molecules/HorizontalHeroUnit',
		OppskriftFooter: '../molecules/Footers/OppskriftFooter',
		getColor: '../utils/get-color',
		getVariable: '../utils/get-variable',
		NavWithOptionalConstrainer: '../molecules/NavWithOptionalConstrainer',
		HorizontalLinkBar: '../molecules/HorizontalLinkBar',
		VerticalLinkBar: '../molecules/VerticalLinkBar',
		FullWidthLinkBar: '../molecules/FullWidthLinkBar',
		ScrollArrowsLinkBar: '../molecules/ScrollArrowsLinkBar',
		Dice: '../molecules/Dice',
		TagSection: '../molecules/TagSection',
		FloatImage: '../molecules/FloatImage',
		IconBar: '../molecules/IconBar',
		Labels: '../molecules/Labels',
		LunchButton: '../molecules/LunchButton',
		TrysilPlug: '../molecules/TrysilPlug',
		ThemeSwitcher: '../molecules/ThemeSwitcher',
		GenericAd: '../molecules/GenericAd',
		StickyAd: '../molecules/StickyAd',
		FullscreenAd: '../molecules/FullscreenAd',
		LazyProgressiveImage: '../molecules/LazyProgressiveImage',
		Source: '../molecules/Source',
		RecipeMetaData: '../molecules/MainRecipe/RecipeMetaData',
		NumberedList: '../molecules/NumberedList',
		WallpaperAd: '../molecules/WallpaperAd',
		StarsRating: '../molecules/StarsRating',
		SearchField: '../molecules/SearchField',
		Article: '../atoms/Article',
		AdWrapper: '../atoms/AdWrapper',
		BlockLink: '../atoms/BlockLink',
		BlockLinkWithBackgroun: '../atoms/BlockLinkWithBackground',
		BlockQuote: '../atoms/BlockQuote',
		Body: '../atoms/Body',
		BodyText: '../atoms/BodyText',
		Button: '../atoms/Button',
		BylineImage: '../atoms/BylineImage',
		BylineName: '../atoms/BylineName',
		BylineWithTwoLines: '../atoms/BylineWithTwoLines',
		ColorTextBox: '../atoms/MainRecipe/ColorTextBox',
		YoutubeFrame: '../atoms/MainRecipe/youtubeFrame',
		Caption: '../atoms/Caption',
		Cite: '../atoms/Cite',
		Tag: '../atoms/Tag',
		Col: '../atoms/Col',
		ColorBox: '../atoms/ColorBox',
		DontPushTheAdBoundaries: '../atoms/DontPushTheAdBoundaries',
		DotLoader: '../atoms/loaders/DotLoader',
		Dropdown: '../atoms/Dropdown',
		Error: '../atoms/Error',
		Figure: '../atoms/Figure',
		FigCaption: '../atoms/FigCaption',
		FontIcon: '../atoms/FontIcon',
		SvgIcon: '../atoms/SvgIcon',
		IconWithText: '../atoms/IconWithText',
		GlobalStyle: '../atoms/GlobalStyle',
		Grid: '../atoms/Grid',
		NoPaddingGrid: '../atoms/NoPaddingGrid',
		Header: '../atoms/Header',
		HorizontalOverflowGradien: '../atoms/HorizontalOverflowGradient',
		Image: '../atoms/Image',
		Kicker: '../atoms/Kicker',
		Label: '../atoms/Label',
		LeetTextarea: '../atoms/LeetTextarea',
		Link: '../atoms/Link',
		ListItem: '../atoms/ListItem',
		LoadingSearchIcon: '../atoms/loaders/LoadingSearchIcon',
		LunchKicker: '../atoms/LunchKicker',
		NativeAdKicker: '../atoms/NativeAdKicker',
		Pips: '../atoms/Pips',
		PublishedDate: '../atoms/PublishedDate',
		Quote: '../atoms/Quote',
		Row: '../atoms/Row',
		Standfirst: '../atoms/Standfirst',
		ThemeName: '../atoms/ThemeName',
		HorizontalFlexingList: '../atoms/HorizontalFlexingList',
		VerticalFlexingList: '../atoms/VerticalFlexingList',
		LinkBarNav: '../atoms/LinkBarNav',
		LinkBarItem: '../atoms/LinkBarItem',
		XSmallLinkBarLink: '../atoms/LinkBarLink',
		SmallLinkBarLink: '../atoms/LinkBarLink',
		LinkBarLink: '../atoms/LinkBarLink',
		BorderedButton: '../atoms/BorderedButton',
		LargeLinkBarLink: '../atoms/LinkBarLink',
		XSmallLinkBarHeading: '../atoms/LinkBarHeading',
		SmallLinkBarHeading: '../atoms/LinkBarHeading',
		LinkBarHeading: '../atoms/LinkBarHeading',
		LargeLinkBarHeading: '../atoms/LinkBarHeading',
		LinkBarLinkBase: '../atoms/LinkBarLinkBase',
		LinkBarButton: '../atoms/LinkBarButton',
		SmallLinkBarButton: '../atoms/LinkBarButton',
		XSmallLinkBarButton: '../atoms/LinkBarButton',
		LinkBarButtonBase: '../atoms/LinkBarButtonBase',
		XSmallLinkBarDropdown: '../atoms/LinkBarDropdown',
		SmallLinkBarDropdown: '../atoms/LinkBarDropdown',
		LinkBarDropdown: '../atoms/LinkBarDropdown',
		LargeLinkBarDropdown: '../atoms/LinkBarDropdown',
		ShinyLogo: '../atoms/ShinyLogo',
		ThemeSelector: '../atoms/ThemeSelector',
		TopBarSearchField: '../atoms/MatHeader/TopBarSearchField',
		LeftScrollArrow: '../atoms/ScrollArrow',
		RightScrollArrow: '../atoms/ScrollArrow',
		SeHerLogo: '../atoms/SeHerLogo',
		DagbladetLogo: '../atoms/DagbladetLogo',
		DinsideLogo: '../atoms/DinsideLogo',
		MoreComponent: '../atoms/MainRecipe/MoreLine',
		KKLogo: '../atoms/KKLogo',
		ButtonWithModal: '../atoms/ButtonWithModal',
		NumberedListItem: '../atoms/NumberedListItem',
		ActivityTime: '../atoms/SvgIcon/ActivityTime',
		Difficulty: '../atoms/SvgIcon/Difficulty',
		TotalTime: '../atoms/SvgIcon/TotalTime',
		RoundedButton: '../atoms/RoundedButtons',
		SmallRoundedButton: '../atoms/RoundedButtons',
		TinyRoundedButton: '../atoms/RoundedButtons',
		ArrowBullet: '../atoms/ArrowBullet',
	};
}
