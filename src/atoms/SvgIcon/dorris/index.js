const dorrisIcons = {
	'arrow-down': () => import('./ArrowDown'),
	'arrow-left': () => import('./ArrowLeft'),
	'arrow-right': () => import('./ArrowRight'),
	'arrow-up': () => import('./ArrowUp'),
	'bars': () => import('./Bars'),
	'bell': () => import('./Bell'),
	'bookmark': () => import('./Bookmark'),
	'car': () => import('./Car'),
	'check': () => import('./Check'),
	'close': () => import('./Close'),
	'coins': () => import('./Coins'),
	'concentric-circles': () => import('./ConcentricCircles'),
	'dial': () => import('./Dial'),
	'dice': () => import('./Dice'),
	'document': () => import('./Document'),
	'document-alt': () => import('./DocumentAlt'),
	'documents': () => import('./Documents'),
	'facebook': () => import('./Facebook'),
	'food': () => import('./Food.js'),
	'gear': () => import('./Gear'),
	'globe': () => import('./Globe'),
	'grid': () => import('./Grid'),
	'heart': () => import('./Heart'),
	'heart-line': () => import('./HeartLine'),
	'home': () => import('./Home'),
	'home-alt': () => import('./HomeAlt'),
	'horizontal-ellipse': () => import('./HorizontalEllipse'),
	'horoscope': () => import('./Horoscope'),
	'instagram': () => import('./Instagram'),
	'lightning': () => import('./Lightning'),
	'magnifier': () => import('./Magnifier.js'),
	'medal': () => import('./Medal'),
	'new-tab': () => import('./NewTab'),
	'olympic-flame': () => import('./OlympicFlame'),
	'olympic-rings': () => import('./OlympicRings'),
	'paper-plane': () => import('./PaperPlane'),
	'pause': () => import('./Pause'),
	'pencil': () => import('./Pencil'),
	'pin': () => import('./Pin'),
	'play': () => import('./Play'),
	'plus-circle': () => import('./PlusCircle'),
	'podcast': () => import('./Podcast'),
	'running': () => import('./Running'),
	'scale': () => import('./Scale'),
	'share': () => import('./Share'),
	'silhouette': () => import('./Silhouette'),
	'sliders': () => import('./Sliders'),
	'speech-bubble-question': () => import('./SpeechBubbleQuestion'),
	'speech-bubble': () => import('./SpeechBubble'),
	'speech-bubbles': () => import('./SpeechBubbles'),
	'star': () => import('./Star'),
	'step-backward': () => import('./StepBackward'),
	'suitcase': () => import('./Suitcase'),
	'television': () => import('./Television'),
	'thumbs-up': () => import('./ThumbsUp'),
	'trash': () => import('./Trash.js'),
	'vertical-ellipse': () => import('./VerticalEllipse'),
	'video-camera': () => import('./VideoCamera'),

	// Aliases
	'approved': () => import('./Check'),
	'athletics': () => import('./Running'),
	'bin': () => import('./Trash.js'),
	'breaking': () => import('./ConcentricCircles'),
	'burger': () => import('./Bars'),
	'cardio': () => import('./HeartLine'),
	'categories': () => import('./Grid'),
	'clock': () => import('./Dial'),
	'cog': () => import('./Gear'),
	'comment': () => import('./SpeechBubble'),
	'comments': () => import('./SpeechBubbles'),
	'copy': () => import('./Documents'),
	'done': () => import('./Check'),
	'edit': () => import('./Pencil'),
	'entertainment': () => import('./Television'),
	'exit': () => import('./Running'),
	'external-link': () => import('./NewTab'),
	'favorite': () => import('./Heart'),
	'favourite': () => import('./Heart'),
	'feedback': () => import('./SpeechBubbles'),
	'finance': () => import('./Coins'),
	'good': () => import('./ThumbsUp'),
	'health': () => import('./HeartLine'),
	'like': () => import('./ThumbsUp'),
	'menu': () => import('./Bars'),
	'money': () => import('./Coins'),
	'motor': () => import('./Car'),
	'movie': () => import('./VideoCamera'),
	'news': () => import('./DocumentAlt'),
	'newsletter': () => import('./PaperPlane'),
	'newspaper': () => import('./DocumentAlt'),
	'notification': () => import('./Bell'),
	'olympics-alt': () => import('./OlympicFlame'),
	'olympics': () => import('./OlympicRings'),
	'opinion': () => import('./SpeechBubble'),
	'politics': () => import('./Scale'),
	'position': () => import('./Pin'),
	'privacy': () => import('./Document'),
	'profile': () => import('./Silhouette'),
	'question': () => import('./SpeechBubbleQuestion'),
	'quiz': () => import('./SpeechBubbleQuestion'),
	'recommendation': () => import('./Star'),
	'review': () => import('./Dice'),
	'search': () => import('./Magnifier.js'),
	'send': () => import('./PaperPlane'),
	'settings-alt': () => import('./Sliders'),
	'settings': () => import('./Gear'),
	'similar-stories': () => import('./Documents'),
	'sports': () => import('./Running'),
	'time': () => import('./Dial'),
	'travel': () => import('./Suitcase'),
	'tv': () => import('./Television'),
	'user': () => import('./Silhouette'),
	'video': () => import('./VideoCamera'),
	'watch': () => import('./Dial'),
	'world': () => import('./Globe'),
	'write': () => import('./Pencil'),
};

export default dorrisIcons;
