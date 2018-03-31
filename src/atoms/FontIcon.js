import React from 'react';
import styled, { css, injectGlobal } from 'styled-components';

const FontIcon = (props) => {
	injectGlobal`
		@font-face {
			font-family: 'Helveticons';
			font-style: normal;
			font-weight: normal;
			src: url('https://styleguide.dagbladet.no/fonts/helveticons.woff') format('woff');
		}
	`;
	return <Icon {...props} />;
};

const Icon = styled.span`
	font-family: "Helveticons";
	font-smoothing: antialiased;
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	color: ${props => props.color};

	${props => props.size && css`
		font-size: ${props.size}rem;
	`}
	${props => props['size-xs'] && css`
		@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}rem) {
			font-size: ${props['size-xs']}rem;
		}
	`}

	&::before {
		content: "${(props) => {
		switch (props.name) {
		case 'dagbladet': return '\\e883';
		case 'dagbladet-alt': return '\\e884';
		case 'dbid-db': return '\\e885';
		case 'dbid-id': return '\\e886';
		case 'youtube': return '\\e6e8';
		case 'yahoo': return '\\e6e9';
		case 'xbl': return '\\e6ea';
		case 'wordpress': return '\\e6eb';
		case 'vimeo': return '\\e6ec';
		case 'twitter': return '\\e6ed';
		case 'tumblr': return '\\e6ee';
		case 'technorati': return '\\e6ef';
		case 'stumbleupon': return '\\e6f0';
		case 'skype': return '\\e6f1';
		case 'msn-messenger': return '\\e6f3';
		case 'linkedin': return '\\e6f4';
		case 'lastfm': return '\\e6f5';
		case 'google': return '\\e6f6';
		case 'flickr': return '\\e6f8';
		case 'facebook': return '\\e6f9';
		case 'delicious': return '\\e6fb';
		case 'amazon': return '\\e6fe';
		case 'zip': return '\\e600';
		case 'yenbag': return '\\e601';
		case 'wineglass': return '\\e602';
		case 'width': return '\\e603';
		case 'war': return '\\e604';
		case 'wallet': return '\\e605';
		case 'wallplug': return '\\e606';
		case 'userfemales': return '\\e607';
		case 'userfemales-alt': return '\\e608';
		case 'userfemale': return '\\e609';
		case 'usb-connector': return '\\e60a';
		case 'undo': return '\\e60b';
		case 'tv': return '\\e60c';
		case 'tvold': return '\\e60d';
		case 'truck': return '\\e60e';
		case 'trophy': return '\\e60f';
		case 'tree': return '\\e610';
		case 'train': return '\\e611';
		case 'traffic-alt': return '\\e612';
		case 'top': return '\\e613';
		case 'timer': return '\\e614';
		case 'ticket': return '\\e615';
		case 'theif': return '\\e616';
		case 'theater': return '\\e617';
		case 'temperature': return '\\e618';
		case 'temperatrure-alt': return '\\e619';
		case 'takeaway-cup': return '\\e61a';
		case 'tabkey': return '\\e61b';
		case 't-shirt': return '\\e61c';
		case 'sweatshirt': return '\\e61d';
		case 'sunny': return '\\e61e';
		case 'stream': return '\\e61f';
		case 'stophand': return '\\e620';
		case 'stacked-disks': return '\\e621';
		case 'ssd': return '\\e622';
		case 'split': return '\\e623';
		case 'split-alt': return '\\e624';
		case 'speedgauge': return '\\e625';
		case 'spades': return '\\e626';
		case 'snow': return '\\e627';
		case 'smiley': return '\\e628';
		case 'smiley-inverted': return '\\e629';
		case 'sleep': return '\\e62a';
		case 'single-note': return '\\e62b';
		case 'simcard': return '\\e62c';
		case 'sience': return '\\e62d';
		case 'shorts': return '\\e62e';
		case 'shoppingbasket-alt-2': return '\\e62f';
		case 'shoe': return '\\e630';
		case 'shipping': return '\\e631';
		case 'shipping-box': return '\\e632';
		case 'sharing-iphone': return '\\e633';
		case 'share-alt': return '\\e634';
		case 'server': return '\\e635';
		case 'server-alt': return '\\e636';
		case 'scull': return '\\e637';
		case 'save': return '\\e638';
		case 'satellite-dish': return '\\e639';
		case 'safedial': return '\\e63a';
		case 'safe': return '\\e63b';
		case 'ruler': return '\\e63c';
		case 'ruler-alt': return '\\e63d';
		case 'rocket': return '\\e63e';
		case 'roadsign': return '\\e63f';
		case 'road': return '\\e640';
		case 'redo': return '\\e641';
		case 'receipt-yen': return '\\e642';
		case 'receipt-pound': return '\\e643';
		case 'receipt-euro': return '\\e644';
		case 'receipt-dollar': return '\\e645';
		case 're-post': return '\\e646';
		case 'rain': return '\\e647';
		case 'radioreceiver': return '\\e648';
		case 'quote': return '\\e649';
		case 'qrcode': return '\\e64a';
		case 'pulse': return '\\e64b';
		case 'price-yen': return '\\e64c';
		case 'price-pound': return '\\e64d';
		case 'price-euro': return '\\e64e';
		case 'price-dollar': return '\\e64f';
		case 'poweroutlet': return '\\e650';
		case 'pound-bag': return '\\e651';
		case 'post-it': return '\\e652';
		case 'playlist': return '\\e653';
		case 'playingcards': return '\\e654';
		case 'planet': return '\\e655';
		case 'plane': return '\\e656';
		case 'piracy': return '\\e657';
		case 'piggybank': return '\\e658';
		case 'people-alt-2': return '\\e659';
		case 'pc': return '\\e65a';
		case 'path': return '\\e65b';
		case 'pastein': return '\\e65c';
		case 'partly-cloudy': return '\\e65d';
		case 'parental-control': return '\\e65e';
		case 'pants': return '\\e65f';
		case 'paintroller': return '\\e660';
		case 'old-key': return '\\e661';
		case 'network-alt': return '\\e662';
		case 'navigational-arrow': return '\\e663';
		case 'navigation-road': return '\\e664';
		case 'namebadge': return '\\e665';
		case 'mountain': return '\\e666';
		case 'molecular': return '\\e667';
		case 'molecular-network': return '\\e668';
		case 'mindmap': return '\\e669';
		case 'merge': return '\\e66a';
		case 'megaphone': return '\\e66b';
		case 'medicine': return '\\e66c';
		case 'medical-emergency': return '\\e66d';
		case 'male-symbol': return '\\e66e';
		case 'male-and-female': return '\\e66f';
		case 'magnet': return '\\e670';
		case 'linux-tux': return '\\e671';
		case 'lightning': return '\\e672';
		case 'lense': return '\\e673';
		case 'legal': return '\\e674';
		case 'layers': return '\\e675';
		case 'layers-alt': return '\\e676';
		case 'lab': return '\\e677';
		case 'keyhole': return '\\e678';
		case 'ipad': return '\\e679';
		case 'imac': return '\\e67a';
		case 'hourglass': return '\\e67b';
		case 'height': return '\\e67c';
		case 'hearts': return '\\e67d';
		case 'hat': return '\\e67e';
		case 'harddrive': return '\\e67f';
		case 'handprint': return '\\e680';
		case 'grid': return '\\e681';
		case 'gps': return '\\e682';
		case 'globe-alt': return '\\e683';
		case 'geometry': return '\\e684';
		case 'frame': return '\\e685';
		case 'frame-alt': return '\\e686';
		case 'forking': return '\\e687';
		case 'food': return '\\e688';
		case 'flowerpot': return '\\e689';
		case 'fingerprint': return '\\e68a';
		case 'filter': return '\\e68b';
		case 'female-symbol': return '\\e68c';
		case 'euro-bag': return '\\e68d';
		case 'escape': return '\\e68e';
		case 'energy-saving-bulb': return '\\e68f';
		case 'economy': return '\\e690';
		case 'eco': return '\\e691';
		case 'download-alt': return '\\e692';
		case 'donate': return '\\e693';
		case 'dollar-bag': return '\\e694';
		case 'document-dashed-line': return '\\e695';
		case 'dockconnector': return '\\e696';
		case 'dna': return '\\e697';
		case 'directions': return '\\e698';
		case 'directions-alt': return '\\e699';
		case 'dice': return '\\e69a';
		case 'diamonds': return '\\e69b';
		case 'diamond': return '\\e69c';
		case 'diagnostics': return '\\e69d';
		case 'desk': return '\\e69e';
		case 'departure': return '\\e69f';
		case 'deletekey': return '\\e6a0';
		case 'crosshair': return '\\e6a1';
		case 'crop': return '\\e6a2';
		case 'conversation-alt': return '\\e6a3';
		case 'console': return '\\e6a4';
		case 'compress': return '\\e6a5';
		case 'combinationlock': return '\\e6a6';
		case 'combinationlock-open': return '\\e6a7';
		case 'comb': return '\\e6a8';
		case 'coins': return '\\e6a9';
		case 'coins-yen': return '\\e6aa';
		case 'coins-yen-alt': return '\\e6ab';
		case 'coins-pound': return '\\e6ac';
		case 'coins-pound-alt': return '\\e6ad';
		case 'coins-euro': return '\\e6ae';
		case 'coins-euro-alt': return '\\e6af';
		case 'coins-dollar': return '\\e6b0';
		case 'coins-dollar-alt': return '\\e6b1';
		case 'coins-alt': return '\\e6b2';
		case 'coin': return '\\e6b3';
		case 'coin-yen': return '\\e6b4';
		case 'coin-pound': return '\\e6b5';
		case 'coin-euro': return '\\e6b6';
		case 'coin-dollar': return '\\e6b7';
		case 'coffee': return '\\e6b8';
		case 'cocktail': return '\\e6b9';
		case 'clubs': return '\\e6ba';
		case 'cloudy': return '\\e6bb';
		case 'clotheshanger': return '\\e6bc';
		case 'circus': return '\\e6bd';
		case 'cinema': return '\\e6be';
		case 'chip': return '\\e6bf';
		case 'chip-alt': return '\\e6c0';
		case 'chess': return '\\e6c1';
		case 'chart-curve': return '\\e6c2';
		case 'car': return '\\e6c3';
		case 'candy': return '\\e6c4';
		case 'cameraroll': return '\\e6c5';
		case 'calculator': return '\\e6c6';
		case 'bus': return '\\e6c7';
		case 'brush-alt': return '\\e6c8';
		case 'brush-alt2': return '\\e6c9';
		case 'briefcase': return '\\e6ca';
		case 'brick': return '\\e6cb';
		case 'box-open': return '\\e6cc';
		case 'box-alt': return '\\e6cd';
		case 'books': return '\\e6ce';
		case 'bones': return '\\e6cf';
		case 'bird': return '\\e6d0';
		case 'bills': return '\\e6d1';
		case 'bills-yen': return '\\e6d2';
		case 'bills-pound': return '\\e6d3';
		case 'bills-euro': return '\\e6d4';
		case 'bills-dollar': return '\\e6d5';
		case 'bill': return '\\e6d6';
		case 'bill-yen': return '\\e6d7';
		case 'bill-pound': return '\\e6d8';
		case 'bill-euro': return '\\e6d9';
		case 'bill-dollar': return '\\e6da';
		case 'beerglass': return '\\e6db';
		case 'barcode': return '\\e6dc';
		case 'band-aid': return '\\e6dd';
		case 'ball': return '\\e6de';
		case 'backspace': return '\\e6df';
		case 'babystroller': return '\\e6e0';
		case 'award': return '\\e6e1';
		case 'autofill': return '\\e6e2';
		case 'article': return '\\e6e3';
		case 'arrivals': return '\\e6e4';
		case 'alarmclock': return '\\e6e5';
		case 'activity': return '\\e6e6';
		case '3d-glasses': return '\\e6e7';
		case 'windowsizes': return '\\e6ff';
		case 'window-popin': return '\\e700';
		case 'weight': return '\\e701';
		case 'userglasses': return '\\e702';
		case 'trash-alt-2': return '\\e703';
		case 'thoughtbubble': return '\\e704';
		case 'tactics': return '\\e705';
		case 'store': return '\\e706';
		case 'stamp': return '\\e707';
		case 'squigglyline': return '\\e708';
		case 'sprout': return '\\e709';
		case 'speaker': return '\\e70a';
		case 'soundwaves': return '\\e70b';
		case 'sitemap': return '\\e70c';
		case 'share-alt-2': return '\\e70d';
		case 'settings-alt': return '\\e70e';
		case 'settings-alt-2': return '\\e70f';
		case 'sensor': return '\\e710';
		case 'securitycamera': return '\\e711';
		case 'school': return '\\e712';
		case 'sandbox-toys': return '\\e713';
		case 'right-double-arrow': return '\\e714';
		case 'return-to-top': return '\\e715';
		case 'remote': return '\\e716';
		case 'reception': return '\\e717';
		case 'receipt-alt': return '\\e718';
		case 'projector': return '\\e719';
		case 'presentation': return '\\e71a';
		case 'poll': return '\\e71b';
		case 'pokerchip': return '\\e71c';
		case 'photoalbum': return '\\e71d';
		case 'phonering': return '\\e71e';
		case 'people-female': return '\\e71f';
		case 'parachute-drop': return '\\e720';
		case 'paperplane': return '\\e721';
		case 'paperplane-alt': return '\\e722';
		case 'paperbag': return '\\e723';
		case 'palette': return '\\e724';
		case 'pageup': return '\\e725';
		case 'pagedown': return '\\e726';
		case 'operator': return '\\e727';
		case 'old-phone': return '\\e728';
		case 'notepad-alt': return '\\e729';
		case 'nodes': return '\\e72a';
		case 'newspaper': return '\\e72b';
		case 'newspaper-alt': return '\\e72c';
		case 'multiple-windows': return '\\e72d';
		case 'multiple-creditcards': return '\\e72e';
		case 'microscope': return '\\e72f';
		case 'message-unopened': return '\\e730';
		case 'megaphone-2': return '\\e731';
		case 'meeting': return '\\e732';
		case 'map-marker': return '\\e733';
		case 'map-loaction': return '\\e734';
		case 'loupe': return '\\e735';
		case 'logout': return '\\e736';
		case 'location-nearby': return '\\e737';
		case 'location-nearme': return '\\e738';
		case 'library': return '\\e739';
		case 'left-double-arrow': return '\\e73a';
		case 'keychain': return '\\e73b';
		case 'junk': return '\\e73c';
		case 'item-arrangement': return '\\e73d';
		case 'invoice': return '\\e73e';
		case 'inbox-full': return '\\e73f';
		case 'headset': return '\\e740';
		case 'harddrive-alt': return '\\e741';
		case 'handshake': return '\\e742';
		case 'graduate': return '\\e743';
		case 'globe-inverted-europe-africa': return '\\e744';
		case 'globe-inverted-asia': return '\\e745';
		case 'globe-inverted-america': return '\\e746';
		case 'globe-europe-africa': return '\\e747';
		case 'globe-asia': return '\\e748';
		case 'glasses': return '\\e749';
		case 'footprints': return '\\e74a';
		case 'folders': return '\\e74b';
		case 'folder-outline': return '\\e74c';
		case 'flashlight': return '\\e74d';
		case 'firewall': return '\\e74e';
		case 'fire': return '\\e74f';
		case 'filter-arrows': return '\\e750';
		case 'files': return '\\e751';
		case 'filecabinet': return '\\e752';
		case 'facebook-like': return '\\e753';
		case 'drop': return '\\e754';
		case 'door-open': return '\\e755';
		case 'door-open-alt': return '\\e756';
		case 'diskimage': return '\\e757';
		case 'diploma': return '\\e758';
		case 'diploma-alt': return '\\e759';
		case 'diagonal-arrow': return '\\e75a';
		case 'diagonal-arrow-alt': return '\\e75b';
		case 'desktop': return '\\e75c';
		case 'defrag': return '\\e75d';
		case 'cupcake': return '\\e75e';
		case 'crown': return '\\e75f';
		case 'crown-alt': return '\\e760';
		case 'columns': return '\\e761';
		case 'clouddrive': return '\\e762';
		case 'circuits': return '\\e763';
		case 'circle-dotted': return '\\e764';
		case 'circle-dotted-active': return '\\e765';
		case 'certificate': return '\\e766';
		case 'categories': return '\\e767';
		case 'cashregister': return '\\e768';
		case 'browserwindow': return '\\e769';
		case 'brackets': return '\\e76a';
		case 'bomb': return '\\e76b';
		case 'boat-shipping': return '\\e76c';
		case 'blueprint': return '\\e76d';
		case 'birthdaycake': return '\\e76e';
		case 'binoculars': return '\\e76f';
		case 'binary-code': return '\\e770';
		case 'billboard': return '\\e771';
		case 'award-2': return '\\e772';
		case 'auctionhammer': return '\\e773';
		case 'art-easel': return '\\e774';
		case 'application-window': return '\\e775';
		case 'application-window-alt': return '\\e776';
		case 'application-error': return '\\e777';
		case 'app': return '\\e778';
		case 'anchor': return '\\e779';
		case 'zoom-out': return '\\e77a';
		case 'zoom-in': return '\\e77b';
		case 'z-axis-rotation': return '\\e77c';
		case 'y-axis-rotation': return '\\e77d';
		case 'x-axis-rotation': return '\\e77e';
		case 'wrong': return '\\e77f';
		case 'wrench': return '\\e780';
		case 'windows': return '\\e781';
		case 'wifi': return '\\e782';
		case 'wand': return '\\e783';
		case 'voice': return '\\e784';
		case 'video': return '\\e785';
		case 'vcard': return '\\e786';
		case 'utilities': return '\\e787';
		case 'users': return '\\e788';
		case 'users-alt': return '\\e789';
		case 'user': return '\\e78a';
		case 'usb': return '\\e78b';
		case 'unlocked': return '\\e78c';
		case 'universal': return '\\e78d';
		case 'umbrella': return '\\e78e';
		case 'trash': return '\\e78f';
		case 'trash-alt': return '\\e790';
		case 'trafic': return '\\e791';
		case 'tools': return '\\e792';
		case 'time': return '\\e793';
		case 'thumbnails': return '\\e794';
		case 'thumbnails-small': return '\\e795';
		case 'thumbnail-list': return '\\e796';
		case 'thumb-up': return '\\e797';
		case 'thumb-down': return '\\e798';
		case 'terminal': return '\\e799';
		case 'target': return '\\e79a';
		case 'tags': return '\\e79b';
		case 'tag': return '\\e79c';
		case 'tab': return '\\e79d';
		case 'sync': return '\\e79e';
		case 'stop': return '\\e79f';
		case 'stop-alt': return '\\e7a0';
		case 'sound': return '\\e7a1';
		case 'sound-off': return '\\e7a2';
		case 'sound-medium': return '\\e7a3';
		case 'sound-low': return '\\e7a4';
		case 'slideshow': return '\\e7a5';
		case 'shuffle': return '\\e7a6';
		case 'shoppingbasket': return '\\e7a7';
		case 'shoppingbasket-alt': return '\\e7a8';
		case 'shift': return '\\e7a9';
		case 'shield': return '\\e7aa';
		case 'share': return '\\e7ab';
		case 'settings': return '\\e7ac';
		case 'search': return '\\e7ad';
		case 'script': return '\\e7ae';
		case 'script-alt': return '\\e7af';
		case 'screensharing': return '\\e7b0';
		case 'scan': return '\\e7b1';
		case 'rss': return '\\e7b2';
		case 'resize': return '\\e7b3';
		case 'reply-arrow': return '\\e7b4';
		case 'repeat': return '\\e7b5';
		case 'repeat-one': return '\\e7b6';
		case 'remove': return '\\e7b7';
		case 'refresh': return '\\e7b8';
		case 'record': return '\\e7b9';
		case 'read-only': return '\\e7ba';
		case 'rate': return '\\e7bb';
		case 'radio': return '\\e7bc';
		case 'radio-alt': return '\\e7bd';
		case 'pushpin': return '\\e7be';
		case 'printer-alt': return '\\e7bf';
		case 'print': return '\\e7c0';
		case 'previous': return '\\e7c1';
		case 'previous-media': return '\\e7c2';
		case 'power': return '\\e7c3';
		case 'podcast': return '\\e7c4';
		case 'plugin': return '\\e7c5';
		case 'play': return '\\e7c6';
		case 'pin-location': return '\\e7c7';
		case 'piechart': return '\\e7c8';
		case 'pictures': return '\\e7c9';
		case 'pictures-alt': return '\\e7ca';
		case 'pictures-alt-2': return '\\e7cb';
		case 'picture': return '\\e7cc';
		case 'phone': return '\\e7cd';
		case 'people': return '\\e7ce';
		case 'people-alt': return '\\e7cf';
		case 'pause': return '\\e7d0';
		case 'pannel-close': return '\\e7d1';
		case 'panel-show': return '\\e7d2';
		case 'page-restricted': return '\\e7d3';
		case 'page-remove': return '\\e7d4';
		case 'page-add': return '\\e7d5';
		case 'outdent': return '\\e7d6';
		case 'out-box': return '\\e7d7';
		case 'out': return '\\e7d8';
		case 'osx': return '\\e7d9';
		case 'ordered-list': return '\\e7da';
		case 'notepad': return '\\e7db';
		case 'next': return '\\e7dc';
		case 'next-media': return '\\e7dd';
		case 'navigation': return '\\e7de';
		case 'navigation-vertical': return '\\e7df';
		case 'navigation-up': return '\\e7e0';
		case 'navigation-top': return '\\e7e1';
		case 'navigation-right': return '\\e7e2';
		case 'navigation-left': return '\\e7e3';
		case 'navigation-last': return '\\e7e4';
		case 'navigation-horizontal': return '\\e7e5';
		case 'navigation-first': return '\\e7e6';
		case 'navigation-down': return '\\e7e7';
		case 'navigation-bottom': return '\\e7e8';
		case 'music': return '\\e7e9';
		case 'movie': return '\\e7ea';
		case 'movie-alt': return '\\e7eb';
		case 'mouse': return '\\e7ec';
		case 'mousecursor': return '\\e7ed';
		case 'mobile': return '\\e7ee';
		case 'message': return '\\e7ef';
		case 'message-open': return '\\e7f0';
		case 'medal': return '\\e7f1';
		case 'map': return '\\e7f2';
		case 'map-alt': return '\\e7f3';
		case 'mailbox': return '\\e7f4';
		case 'logout-2': return '\\e7f5';
		case 'lock': return '\\e7f6';
		case 'locate': return '\\e7f7';
		case 'loading': return '\\e7f8';
		case 'load': return '\\e7f9';
		case 'list': return '\\e7fa';
		case 'link': return '\\e7fb';
		case 'lightbulb': return '\\e7fc';
		case 'lightbulb-active': return '\\e7fd';
		case 'light-up': return '\\e7fe';
		case 'light-down': return '\\e7ff';
		case 'layout': return '\\e800';
		case 'laptop': return '\\e801';
		case 'keyboard': return '\\e802';
		case 'key': return '\\e803';
		case 'iphone': return '\\e804';
		case 'info': return '\\e805';
		case 'infinity': return '\\e806';
		case 'indent': return '\\e807';
		case 'inbox': return '\\e808';
		case 'inactive-line': return '\\e809';
		case 'home': return '\\e80a';
		case 'help': return '\\e80b';
		case 'help-alt': return '\\e80c';
		case 'headphones': return '\\e80d';
		case 'hd': return '\\e80e';
		case 'handtool': return '\\e80f';
		case 'handtool-alt': return '\\e810';
		case 'handpointer': return '\\e811';
		case 'handpointer-alt': return '\\e812';
		case 'handactive': return '\\e813';
		case 'handactive-alt': return '\\e814';
		case 'hammer': return '\\e815';
		case 'globe': return '\\e816';
		case 'gift': return '\\e817';
		case 'game': return '\\e818';
		case 'fullscreen': return '\\e819';
		case 'fullscreen-alt': return '\\e81a';
		case 'font': return '\\e81b';
		case 'folder': return '\\e81c';
		case 'folder-open': return '\\e81d';
		case 'flash': return '\\e81e';
		case 'flag': return '\\e81f';
		case 'flag-alt': return '\\e820';
		case 'firewire': return '\\e821';
		case 'favorite': return '\\e822';
		case 'factory': return '\\e823';
		case 'eye': return '\\e824';
		case 'exit-fullscreen': return '\\e825';
		case 'ethernet': return '\\e826';
		case 'equalizer': return '\\e827';
		case 'enter': return '\\e828';
		case 'employee': return '\\e829';
		case 'eject': return '\\e82a';
		case 'edit': return '\\e82b';
		case 'download': return '\\e82c';
		case 'documents': return '\\e82d';
		case 'document': return '\\e82e';
		case 'display': return '\\e82f';
		case 'disc': return '\\e830';
		case 'delete': return '\\e831';
		case 'dashboard': return '\\e832';
		case 'cut': return '\\e833';
		case 'curve': return '\\e834';
		case 'creditcard': return '\\e835';
		case 'creditcard-alt': return '\\e836';
		case 'coverflow': return '\\e837';
		case 'conversation': return '\\e838';
		case 'contrast': return '\\e839';
		case 'connection': return '\\e83a';
		case 'company': return '\\e83b';
		case 'command': return '\\e83c';
		case 'color-picker': return '\\e83d';
		case 'color-bucket': return '\\e83e';
		case 'code': return '\\e83f';
		case 'cloud': return '\\e840';
		case 'cloud-upload': return '\\e841';
		case 'client': return '\\e842';
		case 'checkbox': return '\\e843';
		case 'checkbox-empty': return '\\e844';
		case 'checkbox-dotted': return '\\e845';
		case 'checkbox-dotted-active': return '\\e846';
		case 'check': return '\\e847';
		case 'chat': return '\\e848';
		case 'chat-active': return '\\e849';
		case 'chart': return '\\e84a';
		case 'capslock': return '\\e84b';
		case 'camcorder': return '\\e84c';
		case 'calendar': return '\\e84d';
		case 'calendar-alt': return '\\e84e';
		case 'burn': return '\\e84f';
		case 'bulleted-list': return '\\e850';
		case 'bug': return '\\e851';
		case 'brush': return '\\e852';
		case 'box': return '\\e853';
		case 'bookmark': return '\\e854';
		case 'book': return '\\e855';
		case 'book-alt': return '\\e856';
		case 'book-alt-2': return '\\e857';
		case 'bluetooth': return '\\e858';
		case 'block': return '\\e859';
		case 'bell': return '\\e85a';
		case 'bell-off': return '\\e85b';
		case 'battery-low': return '\\e85c';
		case 'battery-full': return '\\e85d';
		case 'bars': return '\\e85e';
		case 'barchart': return '\\e85f';
		case 'badge-restricted': return '\\e860';
		case 'badge-remove': return '\\e861';
		case 'badge-count': return '\\e862';
		case 'badge-add': return '\\e863';
		case 'attachment': return '\\e864';
		case 'arrow-up': return '\\e865';
		case 'arrow-right': return '\\e866';
		case 'arrow-left': return '\\e867';
		case 'arrow-down': return '\\e868';
		case 'alt': return '\\e869';
		case 'alert': return '\\e86a';
		case 'alert-alt': return '\\e86b';
		case 'adressbook': return '\\e86c';
		case 'add': return '\\e86d';
		case '3d': return '\\e86e';
		case 'dice-6': return '\\e86f';
		case 'dice-5': return '\\e870';
		case 'dice-4': return '\\e871';
		case 'dice-3': return '\\e872';
		case 'dice-2': return '\\e873';
		case 'dice-1': return '\\e874';
		case 'bold': return '\\e875';
		case 'italic': return '\\e876';
		case 'football': return '\\e877';
		case 'card': return '\\e878';
		case 'card-alt': return '\\e879';
		case 'cards': return '\\e87a';
		case 'cards-alt': return '\\e87b';
		case 'field': return '\\e87c';
		case 'hamburger': return '\\e87d';
		case 'close': return '\\e87e';
		case 'arrow-alt-left': return '\\e87f';
		case 'arrow-alt-right': return '\\e880';
		case 'arrow-alt-up': return '\\e881';
		case 'arrow-alt-down': return '\\e882';
		case 'standfirst': return '\\e887';
		case 'kicker': return '\\e888';
		case 'rectangle': return '\\e889';
		case 'square': return '\\e890';
		default: return '';
		}
	}}";
	}
`;


export { FontIcon };
