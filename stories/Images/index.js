import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import BasicLazyProgressiveImage from './LazyProgressiveImage/basic';
import WithoutLazyProgressiveImage from './LazyProgressiveImage/without-blur';
import FloatImage from './FloatImage/basic';
import FloatImageLeft from './FloatImage/floatLeft';
import FloatImageRight from './FloatImage/floatRight';
import image from './image';
import figCaption from './fig-caption';
import figureWithImageAndCaption from './figure-with-image-and-caption';

export default () => {
	storiesOf('Images', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Lazyloading', BasicLazyProgressiveImage)
		.add('Lazyloading without blur', WithoutLazyProgressiveImage)
		.add('Floating image', FloatImage)
		.add('Floating left', FloatImageLeft)
		.add('Floating right', FloatImageRight)
		.add('Image', image)
		.add('FigCaption', figCaption)
		.add('Figure', figureWithImageAndCaption);
};
