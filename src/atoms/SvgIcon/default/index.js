import dynamic from 'next/dynamic';

const defaultIconSet = {
	'activity': dynamic(() => import('./ActivityTime')),
	'aller': dynamic(() => import('./Aller')),
	'backNav': dynamic(() => import('./BackNav')),
	'circle-with-text': dynamic(() => import('./CircleWithText')),
	'crossed-video-camera': dynamic(() => import('./CrossedVideoCamera')),
	'dagbladet': dynamic(() => import('./Dagbladet')),
	'dagbladetVideo': dynamic(() => import('./DagbladetVideo')),
	'difficulty': dynamic(() => import('./Difficulty')),
	'double-arrow': dynamic(() => import('./DoubleArrow')),
	'egg': dynamic(() => import('./Egg')),
	'exclamation-mark': dynamic(() => import('./ExclamationMark')),
	'facebook': dynamic(() => import('./FaceBook')),
	'fish': dynamic(() => import('./Fish')),
	'gears': dynamic(() => import('./Gears')),
	'gluten': dynamic(() => import('./Gluten')),
	'hamburger': dynamic(() => import('./Hamburger')),
	'kk': dynamic(() => import('./KK')),
	'laktose': dynamic(() => import('./Lactose')),
	'mail': dynamic(() => import('./Mail')),
	'not-found': dynamic(() => import('./NotFound')),
	'nut': dynamic(() => import('./Nut')),
	'oppskrift-loader': dynamic(() => import('./OppskriftLoader')),
	'oppskrift-logo': dynamic(() => import('./OppskriftLogo')),
	'oppskrift-mobile-logo': dynamic(() => import('./OppskriftMobileLogo')),
	'pinterest': dynamic(() => import('./Pinterest')),
	'play': dynamic(() => import('./Play')),
	'pork': dynamic(() => import('./Pork')),
	'skalldyr': dynamic(() => import('./ShellFish')),
	'star': dynamic(() => import('./Star')),
	'total-time': dynamic(() => import('./TotalTime')),
	'twitter': dynamic(() => import('./Twitter')),
	'user': dynamic(() => import('./Avatar')),
	'vegan': dynamic(() => import('./Vegan')),
	'vegetarian': dynamic(() => import('./Vegetarian')),
	'youtube': dynamic(() => import('./YouTube')),
	'no-sound': dynamic(() => import('./NoSound')),
	'default': () =>  null,
};

export default defaultIconSet;
